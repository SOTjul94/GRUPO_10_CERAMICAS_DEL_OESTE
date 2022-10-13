-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ceramicasDelOeste.db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ceramicasDelOeste.db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ceramicasDelOeste.db` DEFAULT CHARACTER SET utf8 ;
USE `ceramicasDelOeste.db` ;

-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`colors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`colors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `hexa` VARCHAR(45) NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`factories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`factories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `image` VARCHAR(255) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`dimensions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`dimensions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `height` DECIMAL NULL,
  `width` DECIMAL NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`endurances`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`endurances` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pei` INT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`origins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`origins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `flag` VARCHAR(45) NULL,
  `createdAt` VARCHAR(45) NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`salesFormats`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`salesFormats` (
  `id` INT NOT NULL,
  `format` VARCHAR(45) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`styles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`styles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`transits`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`transits` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(255) NULL,
  `price` INT NOT NULL,
  `pieces` INT NOT NULL,
  `discount` INT NULL DEFAULT 0,
  `description` TEXT NOT NULL,
  `thickness` INT NOT NULL,
  `image` VARCHAR(255) NOT NULL,
  `color_id` INT NOT NULL,
  `salesFormat_id` INT NOT NULL,
  `factory_id` INT NOT NULL,
  `style_id` INT NOT NULL,
  `dimension_id` INT NOT NULL,
  `endurance_id` INT NOT NULL,
  `transit_id` INT NOT NULL,
  `origin_id` INT NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_colors_idx` (`color_id` ASC) VISIBLE,
  INDEX `fk_products_factories_idx` (`factory_id` ASC) VISIBLE,
  INDEX `fk_products_dimensions_idx` (`dimension_id` ASC) VISIBLE,
  INDEX `fk_products_endurances_idx` (`endurance_id` ASC) VISIBLE,
  INDEX `fk_products_origins_idx` (`origin_id` ASC) VISIBLE,
  INDEX `fk_products_salesFormats_idx` (`salesFormat_id` ASC) VISIBLE,
  INDEX `fk_products_styles_idx` (`style_id` ASC) VISIBLE,
  INDEX `fk_products_transits_idx` (`transit_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_colors`
    FOREIGN KEY (`color_id`)
    REFERENCES `ceramicasDelOeste.db`.`colors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_factories`
    FOREIGN KEY (`factory_id`)
    REFERENCES `ceramicasDelOeste.db`.`factories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_dimensions`
    FOREIGN KEY (`dimension_id`)
    REFERENCES `ceramicasDelOeste.db`.`dimensions` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_endurances`
    FOREIGN KEY (`endurance_id`)
    REFERENCES `ceramicasDelOeste.db`.`endurances` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_origins`
    FOREIGN KEY (`origin_id`)
    REFERENCES `ceramicasDelOeste.db`.`origins` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_salesFormats`
    FOREIGN KEY (`salesFormat_id`)
    REFERENCES `ceramicasDelOeste.db`.`salesFormats` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_styles`
    FOREIGN KEY (`style_id`)
    REFERENCES `ceramicasDelOeste.db`.`styles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_transits`
    FOREIGN KEY (`transit_id`)
    REFERENCES `ceramicasDelOeste.db`.`transits` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`rol`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`rol` (
  `id` INT NOT NULL,
  `name` INT NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`nationalities`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`nationalities` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `demonym` VARCHAR(255) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `avatar` VARCHAR(255) NULL,
  `document` VARCHAR(100) NULL,
  `birthday` DATE NULL,
  `nationality_id` INT NULL,
  `rol_id` INT NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `Fk_users_rol_idx` (`rol_id` ASC) VISIBLE,
  INDEX `fk_users_nationalities_idx` (`nationality_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_rol`
    FOREIGN KEY (`rol_id`)
    REFERENCES `ceramicasDelOeste.db`.`rol` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_nationalities`
    FOREIGN KEY (`nationality_id`)
    REFERENCES `ceramicasDelOeste.db`.`nationalities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`statuses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`statuses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`orders` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NULL,
  `userId` INT NULL,
  `statusId` INT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_orders_users_idx` (`userId` ASC) VISIBLE,
  INDEX `fk_orders_statuses_idx` (`statusId` ASC) VISIBLE,
  CONSTRAINT `fk_orders_users`
    FOREIGN KEY (`userId`)
    REFERENCES `ceramicasDelOeste.db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_statuses`
    FOREIGN KEY (`statusId`)
    REFERENCES `ceramicasDelOeste.db`.`statuses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`cart_items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`cart_items` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NOT NULL,
  `quantity` INT NULL DEFAULT 1,
  `order_id` INT NOT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_products_users_idx` (`product_id` ASC) VISIBLE,
  INDEX `fk_items_orders_idx` (`order_id` ASC) VISIBLE,
  CONSTRAINT `fk_products_users`
    FOREIGN KEY (`product_id`)
    REFERENCES `ceramicasDelOeste.db`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_items_orders`
    FOREIGN KEY (`order_id`)
    REFERENCES `ceramicasDelOeste.db`.`orders` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`uses`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`uses` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ceramicasDelOeste.db`.`uses_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ceramicasDelOeste.db`.`uses_products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `use_id` INT NULL,
  `product_id` INT NULL,
  `createdAt` TIMESTAMP NULL,
  `updatedAt` TIMESTAMP NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_uses_products_idx` (`use_id` ASC) VISIBLE,
  INDEX `fk_products_uses_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `fk_uses_products`
    FOREIGN KEY (`use_id`)
    REFERENCES `ceramicasDelOeste.db`.`uses` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_products_uses`
    FOREIGN KEY (`product_id`)
    REFERENCES `ceramicasDelOeste.db`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
