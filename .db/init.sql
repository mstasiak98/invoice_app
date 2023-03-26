-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: invoice
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `post_code` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (23,'Kalisz','Bursztynowa 2','62-400','Poland'),(24,'Ostrów Wlkp','Ostrowska 12','62-421','Poland'),(26,'Kalisz','Bursztynowa 2','62-400','Poland'),(31,'Kalisz','Bursztynowa 23','62-400','Poland'),(32,'Ostrów Wlkp','Ostrowska 123','62-421','Poland'),(33,'Kalisz','Bursztynowa testowa','62-400','Poland'),(34,'Commodo nesciunt im','Voluptatem porro ut ','Blanditiis laudantiu','Deserunt rem consect'),(35,'Culpa consequat Bl','Laborum Velit quae ','Voluptatem eos et a','Laborum Cupidatat s'),(36,'Minima enim deserunt','Est natus tempor as','Nostrum fugit non i','Cumque sunt est vo'),(37,'Cumque et perferendi','Illo adipisci qui bl','Qui quos dolor dolor','Magna sed molestiae '),(38,'In non eaque rerum e','Lorem sequi et labor','Fuga Laboris natus ','Suscipit vero assume'),(39,'Tempora et sed unde ','Adipisicing magna et','Nihil sit tempor ad','Quasi expedita et au'),(40,'Autem aspernatur qui','Voluptatem Velit v','Provident quae comm','Non cillum ea ullamc'),(41,'Qui inventore magni ','Mollitia voluptatem ','Amet quaerat velit ','Velit earum dolorem '),(42,'Eum consequatur In ','Occaecat facere sunt','Qui dolor quis imped','Et sapiente exceptur'),(43,'Vel qui sunt commodi','A autem aperiam temp','Non ut similique id ','Impedit repudiandae'),(44,'Ut veniam labore of','Voluptatum eiusmod e','Fugit in consectetu','Aut ipsum sint aut '),(45,'Elit quas odit cupi','Quis dolor non qui o','Rerum doloribus sed ','Est fugit quaerat '),(46,'Voluptatem debitis i','Sunt commodi aut su','Vero quis velit aliq','Inventore temporibus'),(47,'Nostrum rerum unde m','Aliqua Minima deser','Cupidatat hic cillum','Aut ex duis voluptas'),(48,'Est aliqua Tempor ','Aliqua Tempora nece','Provident occaecat ','Ex odit sapiente ten'),(49,'Voluptas quo ut est ','Voluptatem sit imped','Tempora ut qui numqu','A dolore anim numqua'),(50,'Vel proident et rer','Commodi aliquid aspe','Elit cupidatat dist','Nobis dolor et quod '),(51,'Qui ullam provident','Modi doloremque nihi','Unde quis occaecat a','Voluptas facilis aut'),(52,'Non voluptate obcaec','Lorem perferendis iu','Qui praesentium ipsu','Non autem illum qua'),(53,'A et illum corporis','Cumque anim eos qui ','Perspiciatis labore','Et incidunt est fug'),(54,'Ea et consectetur mi','Dignissimos reprehen','Ullam eum mollit des','Placeat omnis volup'),(55,'Harum nulla porro an','Dolore dolore aut re','Eum excepteur aliqui','Et asperiores id vo'),(56,'Ut consequatur Dolo','Dolorem amet Nam ci','Veniam commodi repu','Nesciunt ab corpori'),(57,'Ut totam omnis non e','Suscipit quibusdam i','Odio et aute ipsa e','Nostrud hic odit id '),(58,'Aut laborum nihil el','In quis ducimus des','Esse vitae tempor ut','Maxime vitae dolorem'),(59,'Dignissimos vel exce','Odit nemo omnis quo ','Temporibus quo paria','Dolor quidem iusto a'),(60,'Aut in harum eum et ','Omnis maxime vitae e','Ullam eveniet magni','Porro voluptate est '),(61,'Unde officiis dicta ','Enim est non laboru','Aliquam tempore ut ','Qui qui deserunt nos'),(62,'Nihil numquam earum ','Lorem nulla dolorem ','Consectetur id hic ','Et placeat hic non '),(63,'Repellendus Ut ea e','Quaerat qui sint ne','Ratione minima ad co','Amet voluptatibus e'),(64,'Atque dolorem est d','Dolore in consequatu','Aut animi veniam v','Et dicta animi qui '),(65,'Iste animi ad labor','Rerum numquam aut vo','Tempora blanditiis u','Quia eos corrupti n'),(66,'Kalisz','csada','62-400','Poland'),(67,'Fugiat aute dolorib','Eveniet velit quia','Nesciunt esse iusto','Possimus elit simi'),(68,'Corrupti temporibus','Nulla quis est illu','Non et ut neque amet','Nulla maxime non ad '),(69,'Veritatis iusto prae','Irure eligendi est ','Duis est voluptatum ','Voluptatum dolore ni'),(70,'Duis voluptas ex vol','Dolor ex et laboris ','Incididunt necessita','Aut quae cillum omni'),(71,'Sed duis labore cons','Voluptates deserunt ','Dolorem saepe ut lab','Magni aute quos enim'),(72,'Ea numquam excepteur','Quia adipisicing rer','Quasi accusantium si','Ea temporibus sit r'),(73,'Unde accusantium quo','Voluptate eum ex dol','Deserunt eligendi an','Cupiditate voluptatu'),(74,'Voluptatem sed expl','Aut ut omnis nisi ma','Libero amet perspic','Est neque qui modi '),(75,'Consequuntur maxime ','Dolore voluptas recu','Repudiandae adipisic','Eaque quis exercitat'),(76,'Velit eveniet nulla','Quisquam qui deserun','Excepturi dicta maio','Eum pariatur Illum'),(77,'Consequatur cillum f','Voluptate error proi','Inventore velit even','Exercitationem quide'),(78,'Occaecat obcaecati e','Et ducimus hic illo','Omnis fugiat quis m','Ratione dolor dolor '),(79,'Veritatis qui cupidi','Laboriosam velit id','Animi maiores ipsam','Sint ipsam cum sit'),(80,'Eum facilis aperiam ','Nostrum ut sapiente ','Corrupti duis nemo ','Sed maiores aut aliq'),(81,'Adipisicing cillum e','Enim odio vitae quis','Quia excepteur velit','Ea eos commodo labo'),(82,'Recusandae Sapiente','Commodi voluptate mo','Quia et aliquid susc','Adipisci sapiente re'),(83,'Dignissimos ratione ','Nihil amet irure al','Vel sequi in sunt e','Non eos Nam quam ip'),(84,'Adipisicing ex eius ','Odit consequat Quos','Aut elit eaque aut ','Aliquid qui porro ex'),(85,'Est amet velit iste','Dolor irure ipsa am','Beatae laudantium q','Enim qui quos aliqui'),(86,'Necessitatibus conse','Quia id itaque nobis','Dolor do nesciunt a','Dicta repudiandae vo'),(87,'Deserunt voluptatem ','Ut facere consequatu','Sit velit eius hic ','Maxime ea temporibus'),(88,'Eveniet et aut ad m','Doloremque hic provi','Non esse velit in q','Nihil excepturi sunt'),(89,'Qui molestias autem ','Minus autem reiciend','Id et laudantium i','Alias quis quis qui '),(90,'Neque non ut nulla a','Unde eum omnis nulla','Non voluptatem inve','Dolor labore a volup'),(91,'Do elit itaque accu','Fugit voluptatum iu','Facere nisi non ut n','Alias asperiores dol'),(92,'Duis non et blanditi','Deleniti non fugiat ','Excepteur irure aut ','Eum cupidatat consec'),(93,'Huxley','2556 Nutters Barn Lane','IA 50124','United States'),(94,'Milwaukee','4613 Grant View Drive','WI 53202','United States');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice`
--

DROP TABLE IF EXISTS `invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `invoice_number` varchar(255) DEFAULT NULL,
  `client_name` varchar(255) DEFAULT NULL,
  `client_email` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `client_address_id` bigint NOT NULL,
  `issuer_address_id` bigint NOT NULL,
  `status_id` bigint NOT NULL,
  `terms_id` bigint NOT NULL,
  `created_by` bigint NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_client_address` (`client_address_id`),
  KEY `fk_issuer_address` (`issuer_address_id`),
  KEY `fk_status` (`status_id`),
  KEY `fk_terms` (`terms_id`),
  CONSTRAINT `fk_client_address` FOREIGN KEY (`client_address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `fk_issuer_address` FOREIGN KEY (`issuer_address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`),
  CONSTRAINT `fk_terms` FOREIGN KEY (`terms_id`) REFERENCES `payment_terms` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice`
--

LOCK TABLES `invoice` WRITE;
/*!40000 ALTER TABLE `invoice` DISABLE KEYS */;
INSERT INTO `invoice` VALUES (20,'2022-1','Kenan Melba ','qesicyw@mailinator.com','2022-02-21',93,94,3,1,1,'Landing page',250),(21,'2022-2','Anneli Deepti ','vulupynix@mailinator.com','2022-07-01',36,37,1,9,1,'Ipsum exercitatione',123),(22,'2023-1','Aviram Kgosi ','tilikini@mailinator.com','2023-01-20',38,39,2,8,1,'Accusamus eu eiusmod',41),(23,'2023-2','Madelynn Agata ','pogov@mailinator.com','2023-02-08',40,41,2,3,1,'Quas debitis Nam cul',2);
/*!40000 ALTER TABLE `invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invoice_item`
--

DROP TABLE IF EXISTS `invoice_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invoice_item` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `price` decimal(12,5) DEFAULT NULL,
  `total_price` decimal(12,5) DEFAULT NULL,
  `invoice_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_invoice` (`invoice_id`),
  CONSTRAINT `fk_invoice` FOREIGN KEY (`invoice_id`) REFERENCES `invoice` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invoice_item`
--

LOCK TABLES `invoice_item` WRITE;
/*!40000 ALTER TABLE `invoice_item` DISABLE KEYS */;
INSERT INTO `invoice_item` VALUES (117,'test2',1,41.00000,41.00000,22),(118,'as',1,2.00000,2.00000,23),(119,'Implementation',1,200.00000,200.00000,20),(120,'UI/UX Design',1,50.00000,50.00000,20),(121,'dwa',1,123.00000,123.00000,21);
/*!40000 ALTER TABLE `invoice_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment_terms`
--

DROP TABLE IF EXISTS `payment_terms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment_terms` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment_terms`
--

LOCK TABLES `payment_terms` WRITE;
/*!40000 ALTER TABLE `payment_terms` DISABLE KEYS */;
INSERT INTO `payment_terms` VALUES (1,'PIA'),(2,'NET7'),(3,'NET10'),(4,'NET15'),(5,'NET30'),(6,'NET60'),(7,'EOM'),(8,'COD'),(9,'CIA');
/*!40000 ALTER TABLE `payment_terms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `status`
--

DROP TABLE IF EXISTS `status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `status` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `status`
--

LOCK TABLES `status` WRITE;
/*!40000 ALTER TABLE `status` DISABLE KEYS */;
INSERT INTO `status` VALUES (1,'Draft'),(2,'Pending'),(3,'Paid');
/*!40000 ALTER TABLE `status` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-26 14:25:53
