package com.faber.giex.service;

import org.springframework.stereotype.Service;

@Service
public class IDocumentoImpl implements IDocumento {
  
  @Override
  public String leerDoc(String doc) {
    return new String("Faber - Leer Documento: " + doc);
  }

}
