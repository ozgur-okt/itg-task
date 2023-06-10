CREATE DATABASE  IF NOT EXISTS `product_directory`;
USE `product_directory`;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

--
-- Data for table `product`
--

INSERT INTO `product` VALUES
	(1,'test',44,'https://picsum.photos/200/200/?image=23'),
	(2,'test2',55,'https://picsum.photos/200/200/?image=67'),
	(3,'test3',77,'https://picsum.photos/200/200/?image=21'),
	(4,'test4',88,'https://picsum.photos/200/200/?image=25'),
	(5,'test5',33,'https://picsum.photos/200/200/?image=35');

