/* -------------------------------------------------------------------
|  🐼 Input Validators
|
|  🐯 Purpose: THIS FILE CONTAINS ALL THE VALIDATORS OBJECTS
|
|  🐸 Returns:  -
*------------------------------------------------------------------- */

export const nombreValidation = {
    name: 'nombre',
    label: 'Nombre',
    type: 'text',
    id: 'nombre',
    placeholder: 'Nombre',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 30,
        message: '30 caracteres maximo'
      },
      pattern: {
        value:
        /^[A-Za-z\s]*$/,
        message: 'Nombre no valido'
      }
    }
  }
  
  export const nombreTrenesValidation = {
    name: 'nombre',
    label: 'Nombre',
    type: 'text',
    id: 'nombre',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 30,
        message: '30 caracteres maximo'
      },
      pattern: {
        value:
        /^[A-Za-z\s]*$/,
        message: 'Nombre no valido'
      }
    }
  }
  
  export const apellidoValidation = {
    name: 'apellido',
    label: 'Apellido',
    type: 'text',
    id: 'apellido',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 30,
        message: '30 caracteres maximo'
      },
      pattern: {
        value:
        /^[A-Za-z\s]*$/,
        message: 'Apellido no valido'
      }
    }
  }
  
  export const apellidoTrenesValidation = {
    name: 'apellido',
    label: 'Apellido',
    type: 'text',
    id: 'apellido',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 30,
        message: '30 caracteres maximo'
      },
      pattern: {
        value:
        /^[A-Za-z\s]*$/,
        message: 'Apellido no valido'
      }
    }
  }
  

  export const nroTramiteValidation = {
    name: 'nroTramite',
    label: 'Nro. Trámite - Primeros Once Números',
    type: 'text',
    id: 'nroTramite',
    aclaracion: 'Se encuentrá en tu DNI. ',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 12,
        message: '11 caracteres maximo'
      },
      pattern: {
        value:
        /^\d+$/,
        message: 'Dni no valido'
      }
    }
  }
  
  export const generoValidation = {
    name: 'genero',
    label: 'Género',
    type: 'select',
    id: 'genero',
    arrayValues: ['F', 'M', 'X'],
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 30,
        message: '30 caracteres maximo'
      }
    }
  }
  
  export const codAreaValidation = {
    name: 'codArea',
    label: 'Cod De Área Telefónico',
    type: 'text',
    id: 'codArea',
    placeholder: 'Ej: 2266',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 4,
        message: '4 caracteres maximo'
      },
      pattern: {
        value:
        /^[1-9]\d*$/,
        message: 'CodArea no valido'
      }
    }
  }
  
  export const numeroValidation = {
    name: 'numero',
    label: 'Telefono',
    type: 'text',
    id: 'numero',
    placeholder: 'Nro de Telefono',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 15,
        message: 'El numero debe tener max 15 digitos'
      },
      pattern: {
        value:
        /^[1-9]\d*$/,
        message: 'Numero no valido - El numero no puede arrancar con cero'
      }
  
    }
  }
  
  export const correoValidation = {
    name: 'correo',
    label: 'Correo',
    type: 'text',
    id: 'correo',
    placeholder: 'Correo',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 50,
        message: '50 caracteres maximo'
      },
      pattern: {
        value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email no valido'
      }
    }
  }
  
  
  export const passwordTrenesValidation = {
    name: 'passwordTrenes',
    label: 'Contraseña Trenes Argentinos',
    type: 'password',
    id: 'passwordTrenes',
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 50,
        message: '50 caracteres maximo'
      }
    }
  }
  
  export const textoValidation = {
    name: 'mensaje',
    label: 'Mensaje',
    type: 'text',
    id: 'mensaje',
    placeholder: 'Ingresá tu consulta',
    arrayValues: [],
    validation: {
      required: true
    }
  }
  
  export const destinoValidation = {
    name: 'destino',
    label: 'Destino',
    type: 'text',
    id: 'destino',
    placeholder: 'Ingresá tu destino',
    arrayValues: [],
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      }
    }
  }
  
  export const cantidadValidation = {
    name: 'pasajeros',
    label: 'Cantidad de Pasajeros',
    type: 'text',
    id: 'pasajeros',
    placeholder: 'Seleccion el destino ...',
    arrayValues: ['1'],
    validation: {
      required: true
    }
  }
  
  const today = new Date()
  
  // let dd = today.getDate()
  // let mm = today.getMonth() + 1 // January is 0!
  // const yyyy = today.getFullYear()
  
  // if (dd < 10) {
  //   dd = '0' + dd
  // }
  
  // if (mm < 10) {
  //   mm = '0' + mm
  // }
  
  // today = yyyy + '-' + mm + '-' + dd
  // today = today.replace(/-/g, '/')
  // console.log(today)
  // const picker = new Pikaday({
  //   field: document.getElementById('datepicker'),
  //   maxDate: today, // maximum/latest date set to today
  //   // demo only
  //   position: 'top left',
  //   reposition: false
  // })
  // console.log(picker)
  
  export const fechaValidation = {
    name: 'fecha',
    label: 'Fecha de Viaje',
    type: 'date',
    id: 'fecha datepicker',
    min: today,
    placeholder: '',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      }
    }
  }
  
  export const descValidation = {
    name: 'description',
    label: 'description',
    multiline: true,
    id: 'description',
    placeholder: 'write description ...',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 200,
        message: '200 characters max'
      }
    }
  }
  
  export const passwordValidation = {
    name: 'password',
    label: 'Contraseña',
    type: 'password',
    id: 'password',
    placeholder: 'Contraseña',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      minLength: {
        value: 6,
        message: 'Minimo 6 caracteres'
      }
    }
  }
  
  export const password1Validation = {
    name: 'password1',
    label: 'Contraseña',
    type: 'password',
    id: 'password1',
    placeholder: 'Contraseña',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      minLength: {
        value: 6,
        message: 'Minimo 6 caracteres'
      }
    }
  }
  
  export const password2Validation = {
    name: 'password2',
    label: 'Confirmar contraseña',
    type: 'password',
    id: 'password2',
    placeholder: 'Contraseña',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      minLength: {
        value: 6,
        message: 'Minimo 6 caracteres'
      }
    }
  }
  
  export const passwordConfirmationValidation = {
    name: 'passwordConfirmation',
    label: 'Confirmar Contraseña',
    type: 'password',
    id: 'passwordConfirmation',
    placeholder: 'Confirmar contraseña',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      minLength: {
        value: 6,
        message: 'Minimo 6 caracteres'
      }
    }
  }
  
  export const passwordTrenesConfirmationValidation = {
    name: 'passwordConfirmation',
    label: 'Confirmar Contraseña',
    type: 'password',
    id: 'passwordConfirmation',
    placeholder: 'Confirmar contraseña',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      minLength: {
        value: 6,
        message: 'Minimo 6 caracteres'
      }
    }
  }
  
  export const numValidation = {
    name: 'num',
    label: 'number',
    type: 'number',
    id: 'num',
    placeholder: 'write a random number',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      }
    }
  }
  
  export const emailValidation = {
    name: 'email',
    label: 'email address',
    type: 'email',
    id: 'email',
    placeholder: 'write a random email address',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      pattern: {
        value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email no valido'
      }
    }
  }
  
  // ------------- LOGIN FORM ----------- //
  
  export const mailValidation = {
    name: 'mail',
    label: 'Email',
    type: 'text',
    id: 'mail',
    placeholder: 'Email',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      pattern: {
        value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email no valido'
      },
      maxLength: {
        value: 50,
        message: '50 caracteres maximo'
      }
    }
  }
  
  // -- RECOVER FORM ----- //
  
  export const emailRecoverValidation = {
    name: 'emailRecover',
    label: 'Email asociado a Te Chiflo',
    type: 'text',
    id: 'emailRecover',
    placeholder: 'Email',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      pattern: {
        value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email no valido'
      },
      maxLength: {
        value: 50,
        message: '50 caracteres maximo'
      }
    }
  }
  
  export const otpValidation = {
    name: 'otp',
    label: 'código',
    type: 'number',
    id: 'opt',
    placeholder: 'código',
    validation: {
      required: {
        value: true,
        message: 'Campo obligatorio'
      },
      maxLength: {
        value: 4,
        message: '4 caracteres maximo'
      }
    }
  }