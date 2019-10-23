/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN PatientApiGenerated.js PLEASE EDIT ../PatientApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class PatientApiGenerated {

  static contextUrl = properties.endpoint + "/patient";

  // CRUD METHODS

  /**
  * PatientService.create
  *   @description CRUD ACTION create
  *
  */
  static createPatient(patient) {
    return axios.post(PatientApiGenerated.contextUrl, patient )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * PatientService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deletePatient(id) {
    return axios.delete(PatientApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * PatientService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOnePatient(id) {
    return axios.get(PatientApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * PatientService.list
  *   @description CRUD ACTION list
  *
  */
  static getPatientList() {
    return axios.get(PatientApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * PatientService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static savePatient(patient) {
    return axios.post(PatientApiGenerated.contextUrl + "/" + patient._id, patient )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default PatientApiGenerated;
