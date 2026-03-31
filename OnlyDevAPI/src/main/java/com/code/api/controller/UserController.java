package com.code.api.controller;


import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.context.annotation.EnableMBeanExport;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("api/user/")
public class UserController {
    @GetMapping
    public ResponseEntity<byte[]> downloadUserReport(){

        System.out.println("Prinitng User Reports");

        var userCard1 =new UserCard("supratim nag","snsupra7@gmail.com","CLIENT");
        var list= List.of(userCard1);

        JRBeanCollectionDataSource source=new JRBeanCollectionDataSource(list);


        try(var inputStream=new ClassPathResource("reports/onlyDev_Users.jrxml").getInputStream()){
            //compile report
            var report= JasperCompileManager.compileReport(inputStream);
            //fill report
            JasperPrint jasperPrint =JasperFillManager.fillReport(report,null,source);
            //export pdf
            byte[] bytes=JasperExportManager.exportReportToPdf(jasperPrint);

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .body(bytes);

        } catch (IOException e) {
            throw new RuntimeException(e);
        } catch (JRException e) {
            throw new RuntimeException(e);
        }
    }
}
