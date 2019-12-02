package com.teamcoffee.coffeeflavourwheel.controller;

import com.teamcoffee.coffeeflavourwheel.model.CoffeeLib;
import com.teamcoffee.coffeeflavourwheel.repository.CoffeeLibRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

@RestController
@RequestMapping("/")
public class CoffeeLibController {

    private static final Logger logger = LoggerFactory.getLogger(CoffeeLibController.class);

    @Autowired
    private CoffeeLibRepository repository;

    @GetMapping("/coffeelib")
    public List<CoffeeLib> allTastedCoffee() {
        return repository.findAll();
    }

    @GetMapping(path = {"/coffeelib/{id}"})
    public ResponseEntity<CoffeeLib> findById(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/coffeelib/count")
    public Long count() {
        return repository.count();
    }

    @PostMapping(value = "/coffeelib/posts")
    public CoffeeLib create(@RequestBody CoffeeLib coffeeLib) {
        return repository.save(coffeeLib);
    }


    @RequestMapping(value = "/uploadFile2", method = RequestMethod.POST)
    public @ResponseBody
    CoffeeLib uploadFileHandler(
            @RequestParam("coffeeName") String coffeeName,
            @RequestParam("roaster") String roaster,
            @RequestParam("roastColor") String roastColor,
            @RequestParam("processingMethod") String processingMethod,
            @RequestParam("tastingMethod") String tastingMethod,
            @RequestParam("beanType") String beanType,
            @RequestParam("userNotes") String userNotes,
            @RequestParam("file") MultipartFile file) {

        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();

                // Creating the directory to store file
                String rootPath = System.getProperty("catalina.home");
                File dir = new File(rootPath + File.separator + "tmpFiles");
                if (!dir.exists())
                    dir.mkdirs();

                // Create the file on server
                File serverFile = new File(dir.getAbsolutePath()
                        + File.separator + coffeeName + roaster + roastColor + processingMethod + tastingMethod + beanType + userNotes);
                BufferedOutputStream stream = new BufferedOutputStream(
                        new FileOutputStream(serverFile));
                stream.write(bytes);
                stream.close();

                logger.info("Server File Location="
                        + serverFile.getAbsolutePath());

                return new CoffeeLib();
            } catch (Exception e) {
                return new CoffeeLib();
            }
        } else {
            return new CoffeeLib();
        }
    }


    @PostMapping(path = "/home/coffeelib/posts", consumes = { "multipart/form-data" } )
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    public String addNewCoffee (
//                                @RequestParam("date") Date date,
                                @RequestParam("file") MultipartFile[] file,
                                @RequestParam("coffeeName") String coffeeName,
                                @RequestParam("roaster") String roaster,
                                @RequestParam("roastColor") String roastColor,
                                @RequestParam("processingMethod") String processingMethod,
                                @RequestParam("tastingMethod") String tastingMethod,
                                @RequestParam("beanType") String beanType,
                                @RequestParam("userNotes") String userNotes)
//                                @RequestParam("fileName") String fileName,
//                                @RequestParam("fileType") String fileType)
    {
        CoffeeLib c = new CoffeeLib();
//        c.setDate(date);
//        c.setFile(file);
        c.setCoffeeName(coffeeName);
        c.setRoaster(roaster);
        c.setRoastColor(roastColor);
        c.setProcessingMethod(processingMethod);
        c.setTastingMethod(tastingMethod);
        c.setBeanType(beanType);
        c.setUserNotes(userNotes);
        repository.save(c);
        return "saved";
    }

    @PostMapping(path = "/coffeelib/posts/flag" )
    public boolean addFlag(@RequestParam("flag") boolean flag) {
        CoffeeLib f = new CoffeeLib();
        f.setFlag(flag);
        repository.save(f);
        return false;
    }


    @PutMapping(value = "/coffeelib/{id}")
    public ResponseEntity<CoffeeLib> update(@PathVariable("id") long id, @RequestBody CoffeeLib coffeeLib) {
        return repository.findById(id).map(record -> {
            record.setDate(coffeeLib.getDate());
            record.setCoffeeName(coffeeLib.getCoffeeName());
            record.setRoaster(coffeeLib.getRoaster());
            record.setRoastColor(coffeeLib.getRoastColor());
            record.setProcessingMethod(coffeeLib.getProcessingMethod());
            record.setTastingMethod(coffeeLib.getTastingMethod());
            record.setBeanType(coffeeLib.getBeanType());
            record.setUserNotes(coffeeLib.getUserNotes());
            record.setFlag(coffeeLib.isFlag());
            CoffeeLib updated = repository.save(record);
            return ResponseEntity.ok().body(updated);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("coffeelib/{id}")
    public void delete(@PathVariable String id) {
        Long tastedCoffeeId = Long.parseLong(id);
        repository.deleteById(tastedCoffeeId);
    }
}
