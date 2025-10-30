package com.faber.giex.controller;

import org.springframework.web.bind.annotation.RestController;

import com.faber.giex.service.IDocumentoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api-doc")
public class DocumentoController {

  @Autowired
  private IDocumentoImpl documentoSvc;

  @PostMapping("/leer")
  public String getMethodName(@RequestParam("file") MultipartFile file) throws IOException {

    try {
      file.getInputStream().read();

      System.out.println(file.getContentType());
      System.out.println(file.getName());
      System.out.println(file.getOriginalFilename());
      System.out.println(file.getSize());

      //Imprimir el contenido del xls
      BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
      String line = reader.readLine();
      while (line != null) {
        System.out.println(line);
        line = reader.readLine();
      }


      documentoSvc.leerDoc("Faber Param");
      return new String("Faber - Leer Documento: ");
    } catch (Exception e) {
      throw new Exception(e);
    }
  }
}
