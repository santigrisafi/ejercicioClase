let celular = {
  marca: "Nokia",
  modelo: "1100",
  color: "Blanco",
  version: "1.5 plus",
  os: "Android ",
  nfc: true,
  memoriaRam: 2,
  memoriaExterna: 32,
  lanzamiento: 2003,

  encender: () => {
    return `El telefono encendio y mostro el logo de inicio`;
  },

  grabarPantalla: () => {
    return true;
  },

  estaConectado: () => {
    if (encender()) {
      return this.nfc;
    }
  },

  aumentarAlmacenamiento: (memoriaSD) => {
    return this.memoriaExterna + memoriaSD;
  },

};

celular.modelo = "C3";
celular.version = 1.7;

/* console.log(`El celular es ${celular.marca} ${celular.modelo} y usa la version ${celular.os}${celular.version}`); */
console.log(`El celular se le hizo la prueba de encendido y el resultado ${celular.encender()}`);
