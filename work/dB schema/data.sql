CREATE DATABASE
IF NOT EXISTS `ecom_data` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ecom_data`;
-- MySQL dump 10.13  Distrib 8.0.17, for macos10.14 (x86_64)
--
-- Host: localhost    Database: ecom_data
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Contact`
--

DROP TABLE IF EXISTS `Contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contact`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `name` varchar
(255) DEFAULT NULL,
  `age` int
(11) DEFAULT NULL,
  `phone` int
(11) DEFAULT NULL,
  `email` varchar
(255) DEFAULT NULL,
  `address` varchar
(255) DEFAULT NULL,
  `subject` varchar
(255) DEFAULT NULL,
  `comment` varchar
(255) DEFAULT NULL,
  PRIMARY KEY
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contact`
--

LOCK TABLES `Contact` WRITE;
/*!40000 ALTER TABLE `Contact` DISABLE KEYS */;
INSERT INTO `
Contact`
VALUES
    (1, 'Joe Jonas', 25, 2058574758, 'joejonas@gmail.com', '124 Main St.', 'Huge Fan!', 'Hey, this is Joe Jonas from The Jonas Brothers. I\'
m leaving a comment to let you know that I LOVE your site. Keep of the good work.'),(2,'Nick Jonas',22,2075095647,'nickjonas@gmail.com','124 Main St.','Cool Site!','Hey, this is Nick Jonas from The Jonas Brothers. I\'m leaving a comment to let you know that I LOVE your site. Keep of the good work.'),
(3,'Kevin Jonas',35,2095674357,'kevinjonas@gmail.com','124 Main St.','Love it!','Hey, this is Kevin Jonas from The Jonas Brothers. I\'m leaving a comment to let you know that I LOVE your site. Keep of the good work.'),(4,'Kim Kardashian',30,2058574755,'kimk@gmail.com','345 Main St.','Huge Fan!','Hey, this is Kim Kardashian. I\'m leaving a comment to let you know that I LOVE your site. Keep of the good work.'),
(5,'Kanye West',30,2055095657,'kwest@gmail.com','345 Main St.','Cool Site!','Hey, this is Kanye West. I\'m leaving a comment to let you know that I LOVE your site. Keep of the good work.'),(6,'Kylie Jenner',20,2055675357,'kjenner@gmail.com','345 Main St.','Love it!','Hey, this is Kylie Jenner. I\'m leaving a comment to let you know that I LOVE your site. Keep of the good work.'),
(7,'Kendall Jenner',20,1058574755,'kkjenner@gmail.com','345 Main St.','Huge Fan!','Hey, this is Kendall Jenner. I\'m leaving a comment to let you know that I LOVE your site. Keep of the good work.'),(8,'Caitlyn Jenner',45,2087095007,'cjenner@gmail.com','345 Main St.','Cool Site!','Hey, this is Caitlyn Jenner. I\'m leaving a comment to let you know that I LOVE your site. Keep of the good work.'),
(9,'Rob Kardashian',35,2087675357,'rkardashian@gmail.com','345 Main St.','Love it!','Hey, this is Rob Kardashian. I\'m leaving a comment to let you know that I LOVE your site. Keep of the good work.'),(10,'Kourtney Kardashian',30,2055675357,'kkkkardashian@gmail.com','345 Main St.','Love it!','Hey, this is Kourtney Kardashian. I\'m leaving a comment to let you know that I LOVE your site. Keep of the good work.');
/*!40000 ALTER TABLE `Contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Price`
--

DROP TABLE IF EXISTS `Price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Price`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `amount` int
(11) DEFAULT NULL,
  PRIMARY KEY
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Price`
--

LOCK TABLES `Price` WRITE;
/*!40000 ALTER TABLE `Price` DISABLE KEYS */;
INSERT INTO `
Price`
VALUES
    (1, 25),
    (2, 25),
    (3, 15),
    (4, 25),
    (5, 40),
    (6, 40),
    (7, 25),
    (8, 40),
    (9, 15),
    (10, 40),
    (11, 25),
    (12, 15);
/*!40000 ALTER TABLE `Price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product`
(
  `id` int
(11) NOT NULL AUTO_INCREMENT,
  `name` varchar
(255) DEFAULT NULL,
  `Price_id` int
(11) DEFAULT NULL,
  `description` varchar
(255) DEFAULT NULL,
  `img_url` varchar
(255) DEFAULT NULL,
  PRIMARY KEY
(`id`),
  KEY `Price_id`
(`Price_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY
(`Price_id`) REFERENCES `price`
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `
Product`
VALUES
    (1, 'MONOPOLY', 1, 'Sailor Moon and her friends adorn the pieces of the traditional Monopoly game.', 'https://m.media-amazon.com/images/I/61DYpH91NiL._SR500,500_.jpg'),
    (2, 'LUNA MUG', 2, 'This mug in the shape of Sailor Moons guardian kitty will help you get your priorities straight over your morning brew.', 'https://www.geekygiftideas.com/wp-content/uploads/thumbs_dir/Sailor-Moon-Mug-Set-nxt2vl3hfy4m4mglb116gz45swl46fi2a3dy3zbgqw.jpg'),
    (3, 'SAILOR MOON FAN', 3, 'Let your favourite anime characters keep you cool, with this beautifully designed fan!', 'https://c49d16a6c82563251344-1ab5a5b00ecdd96a368a8d8d17482920.ssl.cf2.rackcdn.com/images/TS_Sailor_Moon_And_Sailor_Chibi_Moon_Fan_4_99_Held_1-380-405.jpg'),
    (4, 'MINI MAMORU', 4, 'Limited-Edition action figure of Mamoru Chiba.', 'https://www.jrs-toyworld.com/wp-content/uploads/2018/08/FU6351lg.jpg'),
    (5, 'SAILOR CAPS', 5, 'Luna inspired sailor moon dad hats.', 'https://images-na.ssl-images-amazon.com/images/I/61hH4xaDz%2BL._UX679_.jpg'),
    (6, 'ARTEMIS JACKET', 6, 'Minakos white guardian cat on a shirt.', 'https://kawaiiparadise.com/wp-content/uploads/2017/10/srtemis-jacket-white-500x500.jpg'),
    (7, 'SAILOR BOTTLE', 7, 'Moon power cup with straws.', 'https://www.dhresource.com/0x0s/f2-albu-g10-M01-23-73-rBVaVlzBfJOAQswwAAEtPyciP9M553.jpg/japanese-sailor-moon-cartoon-bottle-sippy.jpg'),
    (8, 'BABY GUARDIAN', 8, 'Artemis and Luna onesie for toddlers.', 'https://i.etsystatic.com/11460121/r/il/6888d0/1599193034/il_794xN.1599193034_f2kp.jpg'),
    (9, 'SAILOR-GOTCHI', 9, 'Sailor moon tamagotchi pin.', 'https://cdn.shopify.com/s/files/1/2804/6118/products/Moon-01_300x300.jpg?v=1516688007'),
    (10, 'SAILOR SQUAD', 10, 'Colorful Sailor Squad t-shirt.', 'https://cdn.shopify.com/s/files/1/0034/4873/3785/products/product-image-780192247.jpg?v=1551863058'),
    (11, 'LUNA BAG', 11, 'Luna back-to-school bookbag.', 'https://ae01.alicdn.com/kf/HTB1YWDMa.4WMKJjSspmq6AznpXal/Women-Girl-Cute-Sailor-Moon-Backpack-Cat-Ear-Shape-Luna-Schoolbag-Round-Designer-Funny-Bag-Bookbag.jpg'),
    (12, 'CRESCENT MOON', 12, 'Custom Sailor Moon Inspired Crescent Moon Necklace.', 'https://i.etsystatic.com/13286761/r/il/b851d9/1368774163/il_1588xN.1368774163_f1g4.jpg');
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed
