package com.teamcoffee.coffeeflavourwheel.controller;

import com.teamcoffee.coffeeflavourwheel.UserService.DBFileStorageService;
import com.teamcoffee.coffeeflavourwheel.model.CoffeeLib;
import com.teamcoffee.coffeeflavourwheel.model.DBFile;
import com.teamcoffee.coffeeflavourwheel.payload.UploadFileResponse;
import com.teamcoffee.coffeeflavourwheel.repository.CoffeeLibRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/")
public class CoffeeLibController {

//    private static final Logger logger = LoggerFactory.getLogger(CoffeeLibController.class);

    @Autowired
    private CoffeeLibRepository repository;

    @GetMapping("/coffeelib")
    public List<CoffeeLib> allTastedCoffee() {
        return (List<CoffeeLib>) repository.findAll();
    }

    @GetMapping(path = {"/coffeelib/{id}"})
    public ResponseEntity<CoffeeLib> findById(@PathVariable long id) {
        return repository.findById(id).map(record -> ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("coffeelib/count")
    public Long count() {
        return repository.count();
    }

//    @GetMapping("/downloadFile/{fileId}")
//    public ResponseEntity<Resource> downloadFile(@PathVariable String fileId) {
//        // Load file from database
//        DBFile dbFile = DBFileStorageService.getFile(fileId);
//
//        return ResponseEntity.ok()
//                .contentType(MediaType.parseMediaType(dbFile.getFileType()))
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + dbFile.getFileName() + "\"")
//                .body(new ByteArrayResource(dbFile.getData()));
//    }

//    @PostMapping(value = "/coffeelib/posts" )
//    public CoffeeLib create(@RequestBody CoffeeLib coffeeLib) { return repository.save(coffeeLib); }

    @PostMapping(path = "/coffeelib/posts" )
    public String addNewCoffee (@RequestParam("coffeeName") String coffeeName,
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
        c.setCoffeeName(coffeeName);
        c.setRoaster(roaster);
        c.setRoastColor(roastColor);
        c.setProcessingMethod(processingMethod);
        c.setTastingMethod(tastingMethod);
        c.setBeanType(beanType);
        c.setUserNotes(userNotes);
//        c.setFileName(fileName);
//        c.setFileType(fileType);
        repository.save(c);
        return "Saved";
    }

//    @PostMapping("/coffeelib/posts/upload")
//    public UploadFileResponse uploadFile(@RequestParam("file") MultipartFile file) {
//        DBFile dbFile = DBFileStorageService.storeFile(file);
//
//        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
//                .path("/downloadFile/")
//                .path(dbFile.getId())
//                .toUriString();
//
//        return new UploadFileResponse(dbFile.getFileName(), fileDownloadUri,
//                file.getContentType(), file.getSize());
//    }
//
//    @PostMapping("/uploadMultipleFiles")
//    public List<UploadFileResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
//        return Arrays.asList(files)
//                .stream()
//                .map(file -> uploadFile(file))
//                .collect(Collectors.toList());
//    }


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
