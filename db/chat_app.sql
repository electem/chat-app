-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.29 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for adonis12
CREATE DATABASE IF NOT EXISTS `adonis12` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `adonis12`;

-- Dumping structure for table adonis12.adonis_schema
CREATE TABLE IF NOT EXISTS `adonis_schema` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table adonis12.adonis_schema: ~2 rows (approximately)
/*!40000 ALTER TABLE `adonis_schema` DISABLE KEYS */;
INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
	(1, '1609834025753_users_schema', 1, '2021-01-06 15:51:14'),
	(2, '1609834853442_messages_schema', 1, '2021-01-06 15:51:15');
/*!40000 ALTER TABLE `adonis_schema` ENABLE KEYS */;

-- Dumping structure for table adonis12.messages
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `message` varchar(254) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `messages_user_id_foreign` (`user_id`),
  CONSTRAINT `messages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=latin1;

-- Dumping data for table adonis12.messages: ~28 rows (approximately)
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` (`id`, `user_id`, `message`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 1, 'test', '2021-01-06 16:16:36', '2021-01-06 16:16:36', NULL),
	(2, 1, 'test12', '2021-01-06 16:17:27', '2021-01-06 16:17:27', NULL),
	(6, 1, 'test123', '2021-01-06 16:59:57', '2021-01-06 16:59:57', NULL),
	(16, 1, 'testing One', '2021-01-06 18:08:03', '2021-01-06 18:08:03', NULL),
	(17, 1, 'testing Two', '2021-01-06 18:08:36', '2021-01-06 18:08:36', NULL),
	(18, 1, 'test1', '2021-01-06 18:09:51', '2021-01-06 18:09:51', NULL),
	(19, 1, 'test2', '2021-01-06 18:09:54', '2021-01-06 18:09:54', NULL),
	(20, 1, 'demo1', '2021-01-06 18:15:03', '2021-01-06 18:15:03', NULL),
	(21, 1, 'Hi', '2021-01-06 18:17:36', '2021-01-06 18:17:36', NULL),
	(22, 1, 'Hello', '2021-01-06 18:17:36', '2021-01-06 18:17:36', NULL),
	(23, 5, 'HWU', '2021-01-06 18:17:36', '2021-01-06 18:17:36', NULL),
	(24, 3, 'I am', '2021-01-06 18:23:54', '2021-01-06 18:23:54', NULL),
	(25, 1, 'fine', '2021-01-06 18:23:54', '2021-01-06 18:23:54', NULL),
	(26, 4, 'what', '2021-01-06 18:23:54', '2021-01-06 18:23:54', NULL),
	(27, 1, 'about', '2021-01-06 18:23:54', '2021-01-06 18:23:54', NULL),
	(28, 3, 'you', '2021-01-06 18:24:17', '2021-01-06 18:24:17', NULL),
	(49, 2, 'test123kkkkkkkkkk', '2021-01-06 19:52:08', '2021-01-06 19:52:08', NULL),
	(50, 1, 'test123kkkkkkk', '2021-01-06 19:52:08', '2021-01-06 19:52:08', NULL),
	(51, 4, 'demo', '2021-01-06 19:52:08', '2021-01-06 19:52:08', NULL),
	(52, 1, 'demo123', '2021-01-06 19:52:08', '2021-01-06 19:52:08', NULL),
	(53, 5, 'demo123', '2021-01-06 19:52:08', '2021-01-06 19:52:08', NULL),
	(54, 1, 'ggg', '2021-01-06 19:52:08', '2021-01-06 19:52:08', NULL),
	(55, 1, 'test123kkkkkkkkkk', '2021-01-06 19:52:09', '2021-01-06 19:52:09', NULL),
	(56, 1, 'test123kkkkkkk', '2021-01-06 19:52:09', '2021-01-06 19:52:09', NULL),
	(57, 3, 'demo', '2021-01-06 19:52:09', '2021-01-06 19:52:09', NULL),
	(58, 1, 'demo123', '2021-01-06 19:52:09', '2021-01-06 19:52:09', NULL),
	(59, 1, 'demo123', '2021-01-06 19:52:09', '2021-01-06 19:52:09', NULL),
	(60, 1, 'ggg', '2021-01-06 19:52:09', '2021-01-06 19:52:09', NULL),
	(61, 2, 'hye bro.. how are you ?', '2021-01-06 19:58:42', '2021-01-06 19:58:42', NULL),
	(62, 2, 'is there meeting today?', '2021-01-06 19:59:09', '2021-01-06 19:59:09', NULL),
	(63, 2, 'is it late for lunch?', '2021-01-06 20:02:15', '2021-01-06 20:02:15', NULL),
	(64, 2, 'Lets go for lunch', '2021-01-06 20:02:15', '2021-01-06 20:02:15', NULL),
	(65, 5, 'hye divya', '2021-01-06 20:04:29', '2021-01-06 20:04:29', NULL),
	(66, 5, 'issue is fixed', '2021-01-06 20:09:44', '2021-01-06 20:09:44', NULL),
	(67, 5, 'could you please check', '2021-01-06 20:09:59', '2021-01-06 20:09:59', NULL),
	(68, 5, 'let me know your feedback ?', '2021-01-06 20:10:37', '2021-01-06 20:10:37', NULL),
	(69, 2, 'new message', '2021-01-06 20:43:49', '2021-01-06 20:43:49', NULL),
	(70, 2, 'Boss is asking about you...', '2021-01-06 20:45:26', '2021-01-06 20:45:26', NULL),
	(71, 2, 'lets go for lunch', '2021-01-06 20:46:13', '2021-01-06 20:46:13', NULL),
	(72, 4, 'hye Diana how about dinner tonight ?', '2021-01-06 20:51:20', '2021-01-06 20:51:20', NULL),
	(73, 4, 'shal we go ?', '2021-01-06 20:51:55', '2021-01-06 20:51:55', NULL),
	(74, 3, 'can we go for lunch?', '2021-01-06 21:01:41', '2021-01-06 21:01:41', NULL),
	(75, 3, 'hye bro.. how are you ?', '2021-01-06 21:02:15', '2021-01-06 21:02:15', NULL);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;

-- Dumping structure for table adonis12.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `gender` varchar(254) DEFAULT NULL,
  `image` varchar(254) DEFAULT NULL,
  `password` varchar(60) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Dumping data for table adonis12.users: ~0 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `gender`, `image`, `password`, `created_at`, `updated_at`) VALUES
	(1, 'API_USER', 'male', 'https://tpc.googlesyndication.com/simgad/18016187071986703145?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4ql5e4DBQY0a8xs3Z-Aj7Bzbji8dpw', '$2a$10$Lx./ag1Zi8bBc5ZBQ2JGhe4U..CAwHlBIQYBX6HMLS8a0lQ5fRMT6', '2021-01-06 15:53:07', '2021-01-06 15:53:07'),
	(2, 'Santosh', 'male', 'https://tpc.googlesyndication.com/simgad', '$2a$10$Lx./ag1Zi8bBc5ZBQ2JGhe4U..CAwHlBIQYBX6HMLS8a0lQ5fRMT6', '2021-01-06 16:05:55', '2021-01-06 16:05:55'),
	(3, 'Swagat', 'male', NULL, '$2a$10$Lx./ag1Zi8bBc5ZBQ2JGhe4U..CAwHlBIQYBX6HMLS8a0lQ5fRMT6', '2021-01-06 16:09:08', '2021-01-06 16:09:09'),
	(4, 'Diana', 'Female', NULL, '$2a$10$Lx./ag1Zi8bBc5ZBQ2JGhe4U..CAwHlBIQYBX6HMLS8a0lQ5fRMT6', '2021-01-06 19:24:42', '2021-01-06 19:24:42'),
	(5, 'Divya', 'Female', NULL, '$2a$10$Lx./ag1Zi8bBc5ZBQ2JGhe4U..CAwHlBIQYBX6HMLS8a0lQ5fRMT6', '2021-01-06 19:38:24', '2021-01-06 19:38:25');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
