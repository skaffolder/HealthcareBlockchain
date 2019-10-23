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
 *  TO CUSTOMIZE ReportModelGenerated.js PLEASE EDIT ../ReportModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_HealthcareBlockchain_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * ReportModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.Report.create(item);    return result;
  },
  
  /**
  * ReportModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.Report.destroy({ where: { _id: id } });
  },
  
  /**
  * ReportModel.findBydoctor
  *   @description CRUD ACTION findBydoctor
  *   @param Objectid key Id della risorsa doctor da cercare
  *
  */
  async findBydoctor(key) {
    return await Database.getConnection().models.Report.findAll({ where: { "doctor": key } });
  },
  
  /**
  * ReportModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.Report.findByPk(id);
    return result;
  },
  
  /**
  * ReportModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.Report.findAll();
      },
  
  /**
  * ReportModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.Report.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
