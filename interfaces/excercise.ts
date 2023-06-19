(()=>{

    interface IEnsayo_Clinico{
        version: string,
        id: string,
        versiones: string[],
    }

    interface ITramite{ 
        idSolicitud: string,
        idTramite: string,
        idAutorizacion: string,
        homoclave: string,
        modalidad: string
    }

    interface ITitular{
        rfc: string,
        domicilio: IDomicilio,
        datosContacto: IContacto,
        personalidadJuridica: string,
    }

    interface IInvestigador{
        tipoInvestigador: string,
        nombre: string,
        cargo: string,
        email: string,
        afiliacion: string,
    }

    interface IConsentmiento_Informado{
        nombre: string,
        fecha: string,
        version: string,
    }

    interface IManual_Investigador{
        nombre: string,
        fecha: string,
        version: string,
    }

    interface IInvestigacion{
        tituloProtocolo: string,
        tituloPublico: string,
        titucloCientifico: string,
        acronimo: string,
        versionProtocolo: string,
        fechaProtocolo: string,
        estadoReclutamiento: string,
        consentimientoInformado: IConsentmiento_Informado,
        manualInvestigador: IManual_Investigador,
        intervenciones: string[],
        criteriosClaveInclusion: string[],
        criteriosClaveExclusion: string[],
        fechaPrimerinscripcion: string,
        tamañoMuestra: string,        
    }

    interface IPatrocinador{
        princial: string,
        secundario: string,
        fuentesApoyoMonetario: string[],
    }

    interface IDomicilio{
        calle: string,
        numeroExterior: string,
        numeroInterior: string,
        colonia: string,
        cp: string,
        municipio: string,
        entidadFederativa: string,
    }

    interface IComite{
        tipo: string,
        nombre: string,
        presidente: string,
        secretario: string,
        statusRevision?: string,
        fechaAprobacionDictamen: string,
        contactoRevision?: IContacto,
        IDomicilio: IDomicilio,
    }

    interface ICentro_Investigacion{
        denominacionSocial: string,
        domicilio: IDomicilio,
    }

    interface ICentro_Atencion_Urgencias{
        denominacionSocial: string,
        domicilio: IDomicilio,
    }

    interface ICentro_Atenciopn{
        denominacionSocial: string,
        domicilio: IDomicilio,
    }

    interface IImportador{
        nombre: string,
    }

    interface IContacto{
        telefono: string,
        extension: string,
        email?: string,
    }

    interface IMetaDatos{
        version: string,
        fecha: string,
        tramite: ITramite,
    }

    interface IComplementaria_RNEC{
        consultasGenerales:{
            nombre: string,
            direccion: string,
            telefono: string,
            email: string,
        },
        consultasPublicas:{
            direccion: string,
            aficiliacion: string,
        },
        consultasCientificas:{
            nombre: string,
            telefono: string,
            email: string,
            afiliacion: string,
        }
        paisesReclutamiento: string[],
        condicionesEstudiadas: string[],
        }

    interface IEnsayo_Clinico{
        metadatos: IMetaDatos,
        titular: ITitular,
        patrocinadores: IPatrocinador[],
        investigadores: IInvestigador[],
        comites: IComite[],
        centrosInvestigacion: ICentro_Investigacion[],
        centrosAtencionUrgencias: ICentro_Atencion_Urgencias[],
        investigacion: IInvestigacion,
        importador: IImportador,
        complementariaRNEC: IComplementaria_RNEC,

    }
})