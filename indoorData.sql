-- MySQL dump 10.19  Distrib 10.3.29-MariaDB, for debian-linux-gnueabihf (armv7l)
--
-- Host: localhost    Database: weather
-- ------------------------------------------------------
-- Server version	10.3.29-MariaDB-0+deb10u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `WEATHER`
--

DROP TABLE IF EXISTS `WEATHER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `WEATHER` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `REMOTE_ID` bigint(20) DEFAULT NULL,
  `AMBIENT_TEMPERATURE` decimal(6,2) NOT NULL,
  `AIR_PRESSURE` decimal(6,2) NOT NULL,
  `HUMIDITY` decimal(6,2) NOT NULL,
  `CREATED` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=188 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `WEATHER`
--

LOCK TABLES `WEATHER` WRITE;
/*!40000 ALTER TABLE `WEATHER` DISABLE KEYS */;
INSERT INTO `WEATHER` VALUES (1,NULL,27.25,957.28,57.43,'2021-07-08 01:43:12'),(2,NULL,27.26,957.30,57.01,'2021-07-08 01:43:22'),(3,NULL,27.25,957.23,56.91,'2021-07-08 01:43:32'),(4,NULL,27.27,957.28,56.94,'2021-07-08 01:43:42'),(5,NULL,27.26,957.35,56.68,'2021-07-08 01:43:52'),(6,NULL,27.26,957.35,56.61,'2021-07-08 01:44:02'),(7,NULL,27.26,957.29,56.54,'2021-07-08 01:44:12'),(8,NULL,27.25,957.33,56.33,'2021-07-08 01:44:22'),(9,NULL,27.25,957.33,56.50,'2021-07-08 01:44:32'),(10,NULL,27.25,957.33,56.47,'2021-07-08 01:44:42'),(11,NULL,27.23,957.28,56.55,'2021-07-08 01:44:52'),(12,NULL,27.23,957.40,56.58,'2021-07-08 01:45:02'),(13,NULL,27.23,957.32,57.03,'2021-07-08 01:45:12'),(14,NULL,27.23,957.35,57.32,'2021-07-08 01:45:22'),(15,NULL,27.24,957.34,57.01,'2021-07-08 01:45:32'),(16,NULL,27.23,957.41,56.96,'2021-07-08 01:45:42'),(17,NULL,27.23,957.35,56.72,'2021-07-08 01:45:52'),(18,NULL,27.23,957.32,56.57,'2021-07-08 01:46:02'),(19,NULL,27.24,957.34,56.82,'2021-07-08 01:46:12'),(20,NULL,27.23,957.29,56.79,'2021-07-08 01:46:22'),(21,NULL,27.23,957.35,56.93,'2021-07-08 01:46:32'),(22,NULL,27.22,957.30,56.49,'2021-07-08 01:46:42'),(23,NULL,27.21,957.32,56.21,'2021-07-08 01:46:52'),(24,NULL,27.21,957.29,56.10,'2021-07-08 01:47:02'),(25,NULL,27.21,957.35,56.20,'2021-07-08 01:47:12'),(26,NULL,27.20,957.36,55.90,'2021-07-08 01:47:23'),(27,NULL,27.19,957.34,55.67,'2021-07-08 01:47:33'),(28,NULL,27.20,957.31,55.56,'2021-07-08 01:47:43'),(29,NULL,27.19,957.36,55.57,'2021-07-08 01:47:53'),(30,NULL,27.18,957.32,55.46,'2021-07-08 01:48:03'),(31,NULL,27.18,957.37,55.50,'2021-07-08 01:48:13'),(32,NULL,27.16,957.34,55.33,'2021-07-08 01:48:23'),(33,NULL,27.16,957.31,55.40,'2021-07-08 01:48:33'),(34,NULL,27.16,957.31,55.53,'2021-07-08 01:48:43'),(35,NULL,27.14,957.29,55.48,'2021-07-08 01:48:53'),(36,NULL,27.14,957.32,55.53,'2021-07-08 01:49:03'),(37,NULL,27.15,957.33,55.53,'2021-07-08 01:49:13'),(38,NULL,27.14,957.36,55.61,'2021-07-08 01:49:23'),(39,NULL,27.14,957.32,55.63,'2021-07-08 01:49:33'),(40,NULL,27.12,957.33,55.42,'2021-07-08 01:49:43'),(41,NULL,27.12,957.33,55.44,'2021-07-08 01:49:53'),(42,NULL,27.11,957.32,55.07,'2021-07-08 01:50:03'),(43,NULL,27.14,957.36,55.96,'2021-07-08 01:50:13'),(44,NULL,27.13,957.30,55.57,'2021-07-08 01:50:23'),(45,NULL,27.14,957.34,55.39,'2021-07-08 01:50:33'),(46,NULL,27.14,957.34,55.33,'2021-07-08 01:50:43'),(47,NULL,27.14,957.34,55.25,'2021-07-08 01:50:53'),(48,NULL,27.14,957.36,55.35,'2021-07-08 01:51:03'),(49,NULL,27.14,957.34,55.24,'2021-07-08 01:51:13'),(50,NULL,27.12,957.29,55.25,'2021-07-08 01:51:23'),(51,NULL,27.15,957.35,55.21,'2021-07-08 01:51:34'),(52,NULL,27.14,957.32,55.18,'2021-07-08 01:51:44'),(53,NULL,27.15,957.35,55.23,'2021-07-08 01:51:54'),(54,NULL,27.15,957.36,55.16,'2021-07-08 01:52:04'),(55,NULL,27.15,957.28,55.09,'2021-07-08 01:52:14'),(56,NULL,27.14,957.50,54.98,'2021-07-08 01:52:24'),(57,NULL,27.15,957.31,55.09,'2021-07-08 01:52:34'),(58,NULL,27.16,957.34,55.27,'2021-07-08 01:52:44'),(59,NULL,27.17,957.34,55.55,'2021-07-08 01:52:54'),(60,NULL,27.17,957.34,55.17,'2021-07-08 01:53:04'),(61,NULL,27.18,957.37,55.18,'2021-07-08 01:53:14'),(62,NULL,27.19,957.37,55.14,'2021-07-08 01:53:24'),(63,NULL,27.18,957.37,55.00,'2021-07-08 01:53:34'),(64,NULL,27.17,957.30,55.10,'2021-07-08 01:53:44'),(65,NULL,27.17,957.34,55.12,'2021-07-08 01:53:54'),(66,NULL,27.17,957.38,54.99,'2021-07-08 01:54:04'),(67,NULL,27.16,957.31,54.93,'2021-07-08 01:54:14'),(68,NULL,27.16,957.35,55.02,'2021-07-08 01:54:24'),(69,NULL,27.17,957.37,55.41,'2021-07-08 01:54:34'),(70,NULL,27.16,957.29,54.97,'2021-07-08 01:54:44'),(71,NULL,27.16,957.30,54.99,'2021-07-08 01:54:54'),(72,NULL,27.16,957.30,54.93,'2021-07-08 01:55:04'),(73,NULL,27.17,957.33,54.92,'2021-07-08 01:55:14'),(74,NULL,27.17,957.34,55.14,'2021-07-08 01:55:24'),(75,NULL,27.18,957.35,55.11,'2021-07-08 01:55:35'),(76,NULL,27.17,957.37,55.07,'2021-07-08 01:55:45'),(77,NULL,27.18,957.33,54.82,'2021-07-08 01:55:55'),(78,NULL,27.18,957.35,54.64,'2021-07-08 01:56:05'),(79,NULL,27.19,957.34,54.82,'2021-07-08 01:56:15'),(80,NULL,27.19,957.31,54.84,'2021-07-08 01:56:25'),(81,NULL,27.19,957.32,54.77,'2021-07-08 01:56:35'),(82,NULL,27.18,957.33,54.63,'2021-07-08 01:56:45'),(83,NULL,27.20,957.35,54.50,'2021-07-08 01:56:55'),(84,NULL,27.19,957.32,54.21,'2021-07-08 01:57:05'),(85,NULL,27.21,957.34,54.31,'2021-07-08 01:57:15'),(86,NULL,27.21,957.32,54.14,'2021-07-08 01:57:25'),(87,NULL,27.20,957.31,53.98,'2021-07-08 01:57:35'),(88,NULL,27.21,957.32,53.97,'2021-07-08 01:57:45'),(89,NULL,27.21,957.35,53.77,'2021-07-08 01:57:55'),(90,NULL,27.22,957.28,54.06,'2021-07-08 01:58:05'),(91,NULL,27.22,957.33,54.27,'2021-07-08 01:58:15'),(92,NULL,27.21,957.38,54.44,'2021-07-08 01:58:25'),(93,NULL,27.22,957.30,54.10,'2021-07-08 01:58:35'),(94,NULL,27.22,957.38,54.07,'2021-07-08 01:58:45'),(95,NULL,27.20,957.31,53.93,'2021-07-08 01:58:55'),(96,NULL,27.21,957.34,53.88,'2021-07-08 01:59:05'),(97,NULL,27.22,957.28,53.93,'2021-07-08 01:59:15'),(98,NULL,27.21,957.29,53.82,'2021-07-08 01:59:25'),(99,NULL,27.20,957.31,53.73,'2021-07-08 01:59:35'),(100,NULL,27.20,957.33,53.81,'2021-07-08 01:59:45'),(101,NULL,27.18,957.32,53.76,'2021-07-08 01:59:56'),(102,NULL,27.19,957.37,53.79,'2021-07-08 02:00:06'),(103,NULL,27.19,957.31,53.94,'2021-07-08 02:00:16'),(104,NULL,27.20,957.30,53.94,'2021-07-08 02:00:26'),(105,NULL,27.19,957.29,53.84,'2021-07-08 02:00:36'),(106,NULL,27.20,957.30,53.95,'2021-07-08 02:00:46'),(107,NULL,27.20,957.31,54.09,'2021-07-08 02:00:56'),(108,NULL,27.20,957.30,54.14,'2021-07-08 02:01:06'),(109,NULL,27.20,957.31,54.18,'2021-07-08 02:01:16'),(110,NULL,27.21,957.29,53.98,'2021-07-08 02:01:26'),(111,NULL,27.21,957.32,53.91,'2021-07-08 02:01:36'),(112,NULL,27.20,957.25,53.95,'2021-07-08 02:01:46'),(113,NULL,27.20,957.30,53.87,'2021-07-08 02:01:56'),(114,NULL,27.20,957.25,53.81,'2021-07-08 02:02:06'),(115,NULL,27.20,957.33,53.85,'2021-07-08 02:02:16'),(116,NULL,27.20,957.35,53.80,'2021-07-08 02:02:26'),(117,NULL,27.21,957.24,53.82,'2021-07-08 02:02:36'),(118,NULL,27.20,957.31,53.92,'2021-07-08 02:02:46'),(119,NULL,27.20,957.20,53.93,'2021-07-08 02:02:56'),(120,NULL,27.21,957.32,54.38,'2021-07-08 02:03:06'),(121,NULL,27.21,957.27,53.86,'2021-07-08 02:03:16'),(122,NULL,27.20,957.31,53.74,'2021-07-08 02:03:26'),(123,NULL,27.21,957.34,53.66,'2021-07-08 02:03:36'),(124,NULL,27.20,957.30,53.76,'2021-07-08 02:03:46'),(125,NULL,27.21,957.26,53.87,'2021-07-08 02:03:56'),(126,NULL,27.22,957.30,53.93,'2021-07-08 02:04:07'),(127,NULL,27.21,957.26,53.97,'2021-07-08 02:04:17'),(128,NULL,27.21,957.24,53.88,'2021-07-08 02:04:27'),(129,NULL,27.21,957.32,53.82,'2021-07-08 02:04:37'),(130,NULL,27.21,957.29,53.91,'2021-07-08 02:04:47'),(131,NULL,27.19,957.34,53.93,'2021-07-08 02:04:57'),(132,NULL,27.20,957.28,53.94,'2021-07-08 02:05:07'),(133,NULL,27.20,957.28,54.01,'2021-07-08 02:05:17'),(134,NULL,27.20,957.25,54.11,'2021-07-08 02:05:27'),(135,NULL,27.20,957.33,54.08,'2021-07-08 02:05:37'),(136,NULL,27.19,957.26,54.24,'2021-07-08 02:05:47'),(137,NULL,27.18,957.32,53.97,'2021-07-08 02:05:57'),(138,NULL,27.17,957.31,54.10,'2021-07-08 02:06:07'),(139,NULL,27.17,957.28,53.97,'2021-07-08 02:06:17'),(140,NULL,27.17,957.25,54.16,'2021-07-08 02:06:27'),(141,NULL,27.17,957.26,54.26,'2021-07-08 02:06:37'),(142,NULL,27.16,957.26,54.16,'2021-07-08 02:06:47'),(143,NULL,27.17,957.21,54.22,'2021-07-08 02:06:57'),(144,NULL,27.17,957.28,54.11,'2021-07-08 02:07:07'),(145,NULL,27.16,957.30,54.17,'2021-07-08 02:07:17'),(146,NULL,27.16,957.21,54.18,'2021-07-08 02:07:27'),(147,NULL,27.16,957.30,54.15,'2021-07-08 02:07:37'),(148,NULL,27.14,957.31,54.20,'2021-07-08 02:07:47'),(149,NULL,27.14,957.29,54.23,'2021-07-08 02:07:57'),(150,NULL,27.14,957.31,54.21,'2021-07-08 02:08:07'),(151,NULL,27.13,957.24,54.18,'2021-07-08 02:08:18'),(152,NULL,27.13,957.29,54.19,'2021-07-08 02:08:28'),(153,NULL,27.13,957.27,54.18,'2021-07-08 02:08:38'),(154,NULL,27.13,957.30,54.16,'2021-07-08 02:08:48'),(155,NULL,27.13,957.29,54.15,'2021-07-08 02:08:58'),(156,NULL,27.12,957.31,54.16,'2021-07-08 02:09:08'),(157,NULL,27.12,957.28,54.08,'2021-07-08 02:09:18'),(158,NULL,27.12,957.31,54.02,'2021-07-08 02:09:28'),(159,NULL,27.12,957.25,54.02,'2021-07-08 02:09:38'),(160,NULL,27.11,957.32,53.83,'2021-07-08 02:09:48'),(161,NULL,27.11,957.29,53.85,'2021-07-08 02:09:58'),(162,NULL,27.12,957.28,53.90,'2021-07-08 02:10:08'),(163,NULL,27.11,957.32,53.93,'2021-07-08 02:10:18'),(164,NULL,27.12,957.33,53.88,'2021-07-08 02:10:28'),(165,NULL,27.11,957.31,53.88,'2021-07-08 02:10:38'),(166,NULL,27.12,957.33,53.94,'2021-07-08 02:10:48'),(167,NULL,27.11,957.26,53.83,'2021-07-08 02:10:58'),(168,NULL,27.11,957.30,53.83,'2021-07-08 02:11:08'),(169,NULL,27.12,957.33,53.84,'2021-07-08 02:11:18'),(170,NULL,27.11,957.26,53.77,'2021-07-08 02:11:28'),(171,NULL,27.11,957.32,53.79,'2021-07-08 02:11:38'),(172,NULL,27.09,957.29,53.74,'2021-07-08 02:11:48'),(173,NULL,27.10,957.33,53.70,'2021-07-08 02:11:58'),(174,NULL,27.05,956.90,54.10,'2021-07-08 03:11:43'),(175,NULL,27.05,956.95,54.09,'2021-07-08 03:11:53'),(176,NULL,27.06,956.97,54.31,'2021-07-08 03:12:03'),(177,NULL,27.04,956.89,54.48,'2021-07-08 03:12:13'),(178,NULL,27.04,956.86,54.55,'2021-07-08 03:12:23'),(179,NULL,27.05,956.93,54.53,'2021-07-08 03:12:33'),(180,NULL,27.04,956.92,54.51,'2021-07-08 03:12:43'),(181,NULL,27.06,956.94,54.52,'2021-07-08 03:12:53'),(182,NULL,27.05,956.90,54.58,'2021-07-08 03:13:03'),(183,NULL,27.05,956.85,54.57,'2021-07-08 03:13:13'),(184,NULL,27.03,956.86,54.55,'2021-07-08 03:13:23'),(185,NULL,27.03,956.88,54.55,'2021-07-08 03:13:33'),(186,NULL,27.03,956.88,54.57,'2021-07-08 03:13:43'),(187,NULL,27.78,954.38,53.89,'2021-07-08 06:07:07');
/*!40000 ALTER TABLE `WEATHER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-08 15:16:11
