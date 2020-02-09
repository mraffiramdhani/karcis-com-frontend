-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 27, 2020 at 03:00 PM
-- Server version: 5.7.28-0ubuntu0.18.04.4
-- PHP Version: 7.3.13-1+ubuntu18.04.1+deb.sury.org+1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `karcis`
--

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE `amenities` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`id`, `name`, `icon`) VALUES
(1, 'AC', 'default.png'),
(2, 'Tempat Parkir', 'default.png'),
(3, 'WiFi', 'default.png'),
(4, 'Breakfast', 'default.png');

-- --------------------------------------------------------

--
-- Table structure for table `balances`
--

CREATE TABLE `balances` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `balance` decimal(12,2) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `balances`
--

INSERT INTO `balances` (`id`, `user_id`, `balance`, `created_at`, `updated_at`) VALUES
(2, 2, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57'),
(3, 3, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57'),
(4, 4, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57'),
(5, 5, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57'),
(6, 6, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57'),
(7, 7, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57'),
(8, 8, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57'),
(9, 9, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57'),
(10, 10, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57'),
(11, 11, '1000.00', '2020-01-27 14:59:57', '2020-01-27 14:59:57');

-- --------------------------------------------------------

--
-- Table structure for table `balance_histories`
--

CREATE TABLE `balance_histories` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `balance_id` int(10) UNSIGNED DEFAULT NULL,
  `balance` decimal(12,2) DEFAULT NULL,
  `top_up` decimal(12,2) DEFAULT '0.00',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `province_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `name`, `province_id`) VALUES
(1, 'Bandung', 9),
(2, 'Jakarta', 6),
(3, 'Solo', 10),
(4, 'Surabaya', 11);

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `address` text,
  `star` int(11) DEFAULT '1',
  `city_id` int(10) UNSIGNED DEFAULT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `province_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `description`, `address`, `star`, `city_id`, `latitude`, `longitude`, `province_id`) VALUES
(1, 'Schaefer - Torphy', 'Quas explicabo dolores autem architecto occaecati cupiditate qui. Totam tempora quasi ipsam ipsum earum. Corporis ea natus nostrum non laborum unde atque autem.', '4857 White Springs Suite 575', 4, 1, '-16.5586', '55.8096', 1),
(2, 'Rice, Labadie and Becker', 'Voluptatem voluptatem repellendus repellat iste dolorem ad saepe corporis sint. Ut voluptates molestiae iusto officiis laudantium. A optio ab quae vitae repudiandae quos sunt saepe consequuntur. Dolorem natus fugit natus qui aut maiores non.', '96414 Wilson Locks Apt. 932', 0, 1, '-56.6035', '15.8935', 1),
(3, 'Kreiger - Ledner', 'Magni officiis natus ratione et atque. Eum temporibus cupiditate in beatae. Facilis architecto cum labore suscipit id nesciunt molestias. Ut nesciunt neque cum.', '776 Ayla Flat Suite 121', 3, 1, '-9.8353', '171.7569', 1),
(4, 'Jerde, Herzog and Weimann', 'Sint voluptatem omnis molestiae rerum qui. Quia aperiam nobis. Pariatur consequatur odio molestiae repudiandae eum.', '864 Rice Via Suite 505', 5, 1, '-57.7721', '-167.6729', 1),
(5, 'Beer - Cummings', 'Recusandae fuga quas vel eaque. Expedita est quisquam. Quae atque dolor consequuntur. Voluptas unde ut ipsum. Ut id sit consequatur quo quaerat fuga quo architecto. Nobis non iusto.', '573 Leannon Radial Suite 192', 0, 1, '42.2383', '-16.7456', 1),
(6, 'Rippin Inc', 'Labore nihil quo vero ipsa deserunt non adipisci. Culpa ratione voluptatem autem assumenda ad. Quis quia quam quia quisquam odio. Iusto at voluptas aut tenetur nostrum harum vel tempora molestiae.', '733 Prohaska Station Suite 013', 5, 1, '-85.9420', '143.2289', 1),
(7, 'Wuckert and Sons', 'Iure tempore porro vel praesentium ut accusantium illo modi maxime. Inventore facilis reprehenderit quidem. Doloribus iste odio praesentium et in non. Officiis ut quam rerum.', '63109 Ebert Island Suite 419', 2, 1, '-3.7679', '-70.4404', 1),
(8, 'Feil, Zulauf and Mayer', 'Ea animi eos blanditiis officiis. Sunt voluptas hic quod quia eius ipsum aut. Qui ipsum est aut eveniet ut minus nam esse. Et ea provident adipisci est facere aut.', '964 Eldon Springs Apt. 215', 1, 1, '-66.9062', '-78.2555', 1),
(9, 'Huels, Muller and Swift', 'Fugit nam dicta nisi explicabo minima et ducimus. Saepe sint et porro cum. Velit iste quis totam est. Enim nobis numquam deserunt.', '678 Holly Drives Suite 421', 4, 1, '22.0494', '-56.7760', 1),
(10, 'Kozey, Schmidt and Raynor', 'Autem autem enim aut. Ut nulla fuga velit id quo quis quod nisi facere. Quibusdam nulla minus labore optio laudantium maiores non omnis voluptatem. Eius blanditiis laboriosam eaque dolores ad deserunt vero fugit. Libero sit soluta quisquam iure eos consequuntur et sint. Et dolorum enim ut sit.', '2621 Rolando Pike Suite 067', 0, 1, '-70.5042', '-30.2489', 1);

-- --------------------------------------------------------

--
-- Table structure for table `hotel_amenities`
--

CREATE TABLE `hotel_amenities` (
  `amenities_id` int(10) UNSIGNED DEFAULT NULL,
  `hotel_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotel_amenities`
--

INSERT INTO `hotel_amenities` (`amenities_id`, `hotel_id`) VALUES
(1, 1),
(2, 1),
(4, 1),
(4, 2),
(1, 3),
(3, 1),
(3, 2),
(2, 2),
(3, 3),
(2, 3),
(1, 2),
(4, 3),
(1, 4),
(2, 4),
(3, 4),
(4, 4),
(1, 5),
(2, 5),
(3, 5),
(4, 5),
(1, 6),
(2, 6),
(3, 6),
(4, 6),
(1, 7),
(2, 7),
(3, 7),
(4, 7),
(1, 8),
(2, 8),
(3, 8),
(4, 8),
(1, 9),
(2, 9),
(3, 9),
(4, 9),
(1, 10),
(2, 10),
(3, 10),
(4, 10);

-- --------------------------------------------------------

--
-- Table structure for table `hotel_images`
--

CREATE TABLE `hotel_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `hotel_id` int(10) UNSIGNED DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotel_images`
--

INSERT INTO `hotel_images` (`id`, `hotel_id`, `filename`, `created_at`) VALUES
(1, 1, 'default.png', '2020-01-27 14:59:54'),
(2, 2, 'default.png', '2020-01-27 14:59:54'),
(3, 3, 'default.png', '2020-01-27 14:59:54'),
(4, 4, 'default.png', '2020-01-27 14:59:54'),
(5, 5, 'default.png', '2020-01-27 14:59:54'),
(6, 6, 'default.png', '2020-01-27 14:59:54'),
(7, 7, 'default.png', '2020-01-27 14:59:54'),
(8, 8, 'default.png', '2020-01-27 14:59:54'),
(9, 9, 'default.png', '2020-01-27 14:59:54'),
(10, 10, 'default.png', '2020-01-27 14:59:54');

-- --------------------------------------------------------

--
-- Table structure for table `hotel_orders`
--

CREATE TABLE `hotel_orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `room_type_id` int(10) UNSIGNED DEFAULT NULL,
  `hotel_id` int(10) UNSIGNED DEFAULT NULL,
  `room_count` int(11) DEFAULT '1',
  `guest_count` int(11) DEFAULT '1',
  `cost` decimal(12,2) DEFAULT NULL,
  `subtotal` decimal(12,2) DEFAULT NULL,
  `check_in` datetime DEFAULT NULL,
  `check_out` datetime DEFAULT NULL,
  `duration` int(11) DEFAULT '1',
  `message` text,
  `is_complete` tinyint(1) DEFAULT '0',
  `is_canceled` tinyint(1) DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `hotel_rooms`
--

CREATE TABLE `hotel_rooms` (
  `room_type_id` int(10) UNSIGNED DEFAULT NULL,
  `hotel_id` int(10) UNSIGNED DEFAULT NULL,
  `cost` decimal(12,2) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `hotel_rooms`
--

INSERT INTO `hotel_rooms` (`room_type_id`, `hotel_id`, `cost`, `capacity`, `description`) VALUES
(1, 1, '1778765.00', 2, 'Consequatur explicabo sunt esse nihil quas ducimus. Enim pariatur dolorem eum necessitatibus. Unde itaque officia.'),
(2, 1, '587061.00', 2, 'Culpa harum ut et quia expedita harum. Illum facere dolore ut. Alias id accusantium excepturi voluptas quis. Eveniet quas est deleniti.'),
(5, 2, '1453288.00', 2, 'Commodi harum qui quis et architecto consequatur suscipit qui. Sed beatae neque aut. Itaque itaque ratione est quae sapiente laboriosam vero nobis esse. Ab aut quidem.'),
(1, 2, '1935592.00', 2, 'Laboriosam optio veritatis vero non laudantium labore ut dolores nesciunt. Quia sunt omnis provident quia unde similique ea. Dolores dignissimos id et asperiores architecto ut.'),
(2, 2, '1698444.00', 2, 'Aliquam ut enim veniam. Accusantium qui ipsam error illo est et consequatur. Amet ut dolore placeat facilis eius rem molestias iste. Totam vitae dolores optio enim laborum quis culpa. Provident aperiam suscipit aut quam sapiente dolores. Tempora eligendi doloribus non modi quis rem repellat eaque.'),
(4, 1, '1622917.00', 2, 'Illum perferendis rem ipsa assumenda maxime aut recusandae et consequatur. Eum dolore officia excepturi repudiandae ad. Fuga temporibus animi voluptatem reiciendis et adipisci. Temporibus sunt eaque expedita eius.'),
(3, 2, '724311.00', 2, 'Maiores id veniam sint dolor nemo id vel. Qui ipsa reiciendis. Voluptas soluta ea ducimus pariatur eos eligendi qui. Accusamus atque ipsam ut consectetur praesentium. Qui sed soluta est suscipit recusandae eos fuga nesciunt est.'),
(4, 2, '203347.00', 2, 'Et quia sequi qui deleniti ratione. Nulla repellat atque. Nostrum commodi rem itaque omnis qui id et sit. Magnam quibusdam quis delectus repudiandae.'),
(3, 1, '768023.00', 2, 'Rerum et delectus earum soluta molestiae eaque sequi. Facilis voluptatem iste consequatur id pariatur. Sequi delectus eos.'),
(5, 1, '924034.00', 2, 'Ipsum quia consequatur qui rerum dolorum. Repellat repellendus adipisci. Sapiente architecto vel illo similique.'),
(1, 3, '872496.00', 2, 'Id aliquid quis. Animi consectetur id qui. Aut et a ea ullam aspernatur quod laboriosam velit. Voluptatibus sit repellat neque qui sit.'),
(2, 3, '377586.00', 2, 'Dolor iure voluptates non mollitia vel velit deserunt provident nulla. Aut non itaque magnam nesciunt reiciendis ut quam ut. Vero nam vel sit dolore maxime est rem eum. Veniam distinctio amet itaque itaque architecto sunt fugiat.'),
(3, 3, '1005492.00', 2, 'Aspernatur et ex necessitatibus libero occaecati est. Enim minus ut vitae ratione at ratione officia iusto magnam. Tenetur vel quia nesciunt similique. Occaecati exercitationem veniam facilis et id laboriosam. Illum non inventore adipisci tempora fuga consequuntur.'),
(4, 3, '666956.00', 2, 'Laudantium magnam odio sunt porro quia iste commodi sed illum. Illum temporibus deleniti et doloremque quia eos. Unde aliquid et rem velit nobis quas. Officiis quae qui et nihil sequi dolore eveniet id. In nostrum dignissimos est.'),
(5, 3, '626529.00', 2, 'Tempora possimus alias maxime dolorem dolorem cupiditate eum magnam. Et repudiandae porro perspiciatis ea similique omnis debitis. Et aut cum id expedita facilis ab ad.'),
(1, 4, '436343.00', 2, 'Voluptatem et adipisci molestiae facere voluptatibus autem laboriosam. Ab repudiandae qui voluptas quia odio numquam veritatis. Veniam molestiae qui aspernatur enim dolore tenetur qui nemo nihil. Aut alias magnam quam natus. Ullam aperiam ex accusantium.'),
(2, 4, '1644895.00', 2, 'Est enim impedit alias voluptatum ratione tenetur architecto. Enim dignissimos quibusdam et aut consequatur dolores. Et illum dolores vel molestiae ea nostrum placeat ut maiores. Itaque voluptas ipsam et doloremque est.'),
(3, 4, '1472384.00', 2, 'Similique consectetur cupiditate error minus. Laborum id earum minus omnis amet provident culpa nam tempora. Ipsa temporibus architecto sit cupiditate et accusamus. Et non optio doloremque. Eos laborum id sit quae. Nobis quia quia eveniet ea ipsam neque qui et.'),
(4, 4, '1937103.00', 2, 'Ut sequi et molestias. Vel molestias consectetur. Non natus sint neque quia reprehenderit voluptatem blanditiis.'),
(5, 4, '906211.00', 2, 'Corrupti inventore repellendus sed natus doloribus voluptatem soluta illum vel. Reiciendis qui esse. Molestias laudantium laboriosam consequatur.'),
(1, 5, '1888450.00', 2, 'Autem qui ut reprehenderit nihil ipsam velit est labore. Asperiores modi commodi. Velit quia voluptatem tenetur dolores magnam eos expedita.'),
(2, 5, '1852768.00', 2, 'Possimus aut cumque est sed. Id soluta odit suscipit natus officiis tempore vero velit. Est et voluptatem rem quas aut enim. Natus reiciendis et autem rerum ad ea sit.'),
(3, 5, '829163.00', 2, 'Quia nisi nostrum sed qui voluptas laudantium. Odit sint eos suscipit vel tempora tenetur minus nemo. Repellendus sint asperiores quia tempora modi repudiandae unde. Minus dolore porro animi harum at saepe eaque explicabo.'),
(4, 5, '959380.00', 2, 'Ab enim inventore. Nisi delectus itaque ea non accusantium non laborum mollitia. Et est eum.'),
(5, 5, '1714046.00', 2, 'Est eaque qui repellat debitis. Est dolores sint laboriosam officiis vitae est et. Eaque voluptatem et laboriosam. Ab possimus aut. Voluptas aut soluta inventore et non dolores autem.'),
(1, 6, '110089.00', 2, 'Assumenda et blanditiis aut molestias ut aut maxime. Repellendus rerum alias porro distinctio. Laborum praesentium sit. Sint aspernatur vitae ab autem unde quasi molestiae. Molestiae quaerat sed sit sunt aut quam ab tempore.'),
(2, 6, '1780459.00', 2, 'Est et accusamus dignissimos totam molestias tempora. Aut laborum ullam delectus expedita quisquam nobis aspernatur aut. Eligendi nihil sunt nihil vel et. Quia magnam explicabo non culpa animi accusantium aliquam.'),
(3, 6, '189238.00', 2, 'Ab veritatis voluptatum ad. Enim tempora pariatur. Asperiores pariatur qui ab nostrum dolor et non dolorem et. Ut id soluta reprehenderit et vitae consequuntur.'),
(4, 6, '880963.00', 2, 'Nostrum omnis ea aliquam ratione. Eveniet est voluptas voluptate aut atque ad porro officiis veritatis. Assumenda odit natus at est omnis et eius. Occaecati cumque molestias non numquam rerum id deserunt voluptatem. Id nostrum quia et doloremque ducimus culpa ullam.'),
(5, 6, '459705.00', 2, 'Exercitationem consequuntur voluptatem animi dicta sit est quisquam hic tenetur. Molestias itaque quia dolorem eos corporis. Vitae laborum eaque fuga maiores. Et ut quo. Perferendis aperiam repellat natus quidem atque. Quia laboriosam necessitatibus consequatur velit dolores exercitationem illum et cumque.'),
(1, 7, '1823623.00', 2, 'Cupiditate harum dolorem possimus nihil fuga modi iusto. Non et autem et aut odio est. Quod nisi facilis officia.'),
(2, 7, '1957164.00', 2, 'Quibusdam alias eum aut quo. Quia ad corporis quia non rerum. Distinctio est qui numquam porro labore consequatur.'),
(3, 7, '386635.00', 2, 'Voluptate enim culpa consequatur optio reprehenderit quia. Odit aut est non tempora saepe voluptas. Quam vero beatae voluptatem perspiciatis et aut. Iste nihil ipsam et voluptatibus eum eum et et nihil. Id sit blanditiis omnis iure quas tempore. Ut culpa nesciunt voluptas nemo.'),
(4, 7, '397516.00', 2, 'Nulla aut autem laudantium ut et sit quo natus. Saepe et cupiditate aut. Fuga ipsa id voluptatibus. Eius sapiente consectetur nostrum cupiditate. Sit inventore nihil quaerat beatae unde quam nesciunt nihil est.'),
(5, 7, '1713026.00', 2, 'Omnis ut porro commodi debitis veritatis quas laborum impedit eum. Error non repudiandae aut quae a. Omnis sed voluptatem aliquid quae perspiciatis. Possimus molestias excepturi voluptatem ratione et sed occaecati qui rerum. Eveniet nam enim possimus officiis distinctio et culpa.'),
(1, 8, '1566245.00', 2, 'Non quia sapiente qui et aut quo qui. Occaecati commodi similique omnis consectetur sint et. Quaerat ab quam eius. Quis tenetur alias possimus non nemo asperiores itaque et. In illum modi quo et qui. Adipisci temporibus soluta eveniet veritatis.'),
(2, 8, '1119037.00', 2, 'Laborum ut accusantium quod quia expedita aliquid non. Quia aut quasi. Doloribus quae omnis et atque non quia ut nam. Quisquam non voluptatibus illum soluta est voluptatem asperiores.'),
(3, 8, '423140.00', 2, 'Perspiciatis perferendis in quo consectetur. Quidem voluptas officia excepturi sint. Est rem explicabo in illo porro voluptatibus rerum. Voluptatum vitae a iste sint ipsa quisquam. Occaecati aut quasi harum. Perspiciatis odio culpa nisi ut dolorem et.'),
(4, 8, '556639.00', 2, 'Dolores maiores velit. Dicta unde cupiditate non in cum illum. Similique velit itaque quibusdam illo. Sit iure asperiores animi quia exercitationem corporis amet dolor explicabo. Id quis voluptas ad similique consequatur.'),
(5, 8, '164431.00', 2, 'Facilis qui ipsa vel enim necessitatibus consequatur ducimus dolor. Rerum aut inventore nulla. Perspiciatis qui dolorum dignissimos maxime veniam in. Nemo sit dolores qui itaque iste nemo tempore natus ut. Nostrum dolores quis. Qui eos enim.'),
(1, 9, '630265.00', 2, 'Totam consequuntur voluptatem non cupiditate nihil explicabo sed vel. Facere totam accusantium voluptas qui nemo. Ut quia ut. Ut et est totam aspernatur.'),
(2, 9, '1123002.00', 2, 'Blanditiis ipsam aperiam reprehenderit officia magnam sunt. Inventore eos consequatur est voluptates cum illo labore veritatis. Perspiciatis pariatur et minima ipsam eum suscipit. Quam odit autem dicta. Et aut sequi accusamus. Omnis officia a nihil.'),
(3, 9, '267405.00', 2, 'Fuga perferendis tempora sit molestiae. Illo porro repellendus aliquid voluptas modi modi et asperiores et. Et et hic. Occaecati aliquam aspernatur aut ut quisquam voluptatem voluptas officiis aliquam.'),
(4, 9, '349302.00', 2, 'Molestiae expedita ut sed molestiae ut commodi amet nulla. Sint eaque et. Recusandae impedit voluptas dignissimos impedit tempora neque aut suscipit iure. Beatae et earum. Voluptatem aliquam dolor consequatur.'),
(5, 9, '578394.00', 2, 'Quibusdam at ut. Quia fugit consequuntur reprehenderit impedit sapiente id. Saepe vitae nemo velit et fugit quam doloremque quia a.'),
(1, 10, '566964.00', 2, 'Consequatur ipsa quis eum autem hic. Delectus modi pariatur est placeat magni quam labore voluptate. Temporibus perferendis laboriosam officiis quam dolor qui maiores numquam. Quam et et dolor aut. Vel repellendus nisi enim nihil commodi deleniti.'),
(2, 10, '1146909.00', 2, 'Iure unde sed accusamus rerum. Sequi commodi sunt dolores et voluptatem. Vero ratione quis. Expedita ut dolor. Eum delectus quia temporibus dignissimos laudantium harum.'),
(3, 10, '1178513.00', 2, 'Quia velit iure eos fuga doloremque et beatae. Aliquid et aliquid. Nihil ea voluptas explicabo. Deserunt soluta expedita velit qui quia ut ut sit. Non porro est ipsam natus consequuntur ullam tempora illum. Fugit officia culpa unde.'),
(4, 10, '689373.00', 2, 'Earum perspiciatis ab assumenda totam blanditiis sed praesentium. Magnam voluptatum porro sit voluptas et et aspernatur a ipsam. Deleniti consequatur nisi eveniet assumenda ut quisquam odio. Magni hic quibusdam.'),
(5, 10, '1972263.00', 2, 'Deserunt sapiente quam in labore in itaque. Corrupti quia magni voluptatem. Repellat similique ex sed asperiores suscipit. Est et laboriosam quae enim. Laboriosam minus voluptas reprehenderit eius corporis vel ex. Odio eum placeat velit dolorem doloremque repudiandae dignissimos temporibus.');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations`
--

CREATE TABLE `knex_migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `knex_migrations`
--

INSERT INTO `knex_migrations` (`id`, `name`, `batch`, `migration_time`) VALUES
(96, '20200116023106_roles.js', 1, '2020-01-27 07:59:39'),
(97, '20200121190637_users.js', 1, '2020-01-27 07:59:40'),
(98, '20200121203733_province.js', 1, '2020-01-27 07:59:40'),
(99, '20200121204111_city.js', 1, '2020-01-27 07:59:40'),
(100, '20200121211255_hotels.js', 1, '2020-01-27 07:59:40'),
(101, '20200121212131_amenities.js', 1, '2020-01-27 07:59:40'),
(102, '20200121212309_hotel_amenities.js', 1, '2020-01-27 07:59:41'),
(103, '20200121212540_room_types.js', 1, '2020-01-27 07:59:41'),
(104, '20200121212700_hotel_rooms.js', 1, '2020-01-27 07:59:41'),
(105, '20200121213027_room_amenities.js', 1, '2020-01-27 07:59:42'),
(106, '20200121214154_room_ratings.js', 1, '2020-01-27 07:59:42'),
(107, '20200121215225_room_costs.js', 1, '2020-01-27 07:59:43'),
(108, '20200121230655_revoked_token.js', 1, '2020-01-27 07:59:43'),
(109, '20200122042142_otp_codes.js', 1, '2020-01-27 07:59:43'),
(110, '20200122202037_hotel_images.js', 1, '2020-01-27 07:59:43'),
(111, '20200122202431_room_images.js', 1, '2020-01-27 07:59:43'),
(112, '20200123163221_balance.js', 1, '2020-01-27 07:59:43'),
(113, '20200123163350_balance_history.js', 1, '2020-01-27 07:59:44'),
(114, '20200125022252_orders.js', 1, '2020-01-27 07:59:44');

-- --------------------------------------------------------

--
-- Table structure for table `knex_migrations_lock`
--

CREATE TABLE `knex_migrations_lock` (
  `index` int(10) UNSIGNED NOT NULL,
  `is_locked` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `knex_migrations_lock`
--

INSERT INTO `knex_migrations_lock` (`index`, `is_locked`) VALUES
(1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `otp_codes`
--

CREATE TABLE `otp_codes` (
  `id` int(10) UNSIGNED NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expired_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

CREATE TABLE `provinces` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `name`) VALUES
(1, 'Bali'),
(2, 'Bangka Belitung'),
(3, 'Banten'),
(4, 'Bengkulu'),
(5, 'DI Yogyakarta'),
(6, 'DKI Jakarta'),
(7, 'Gorontalo'),
(8, 'Jambi'),
(9, 'Jawa Barat'),
(10, 'Jawa Tengah'),
(11, 'Jawa Timur'),
(12, 'Kalimantan Barat'),
(13, 'Kalimantan Selatan'),
(14, 'Kalimantan Tengah'),
(15, 'Kalimantan Timur'),
(16, 'Kalimantan Utara'),
(17, 'Kepulauan Riau'),
(18, 'Lampung'),
(19, 'Maluku'),
(20, 'Maluku Utara'),
(21, 'Nanggroe Aceh Darussalam (NAD)'),
(22, 'Nusa Tenggara Barat (NTB)'),
(23, 'Nusa Tenggara Timur (NTT)'),
(24, 'Papua'),
(25, 'Papua Barat'),
(26, 'Riau'),
(27, 'Sulawesi Barat'),
(28, 'Sulawesi Selatan'),
(29, 'Sulawesi Tengah'),
(30, 'Sulawesi Tenggara'),
(31, 'Sulawesi Utara'),
(32, 'Sumatera Barat'),
(33, 'Sumatera Selatan'),
(34, 'Sumatera Utara');

-- --------------------------------------------------------

--
-- Table structure for table `revoked_token`
--

CREATE TABLE `revoked_token` (
  `id` int(10) UNSIGNED NOT NULL,
  `token` text,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'administrator'),
(2, 'customer');

-- --------------------------------------------------------

--
-- Table structure for table `room_amenities`
--

CREATE TABLE `room_amenities` (
  `id` int(10) UNSIGNED NOT NULL,
  `amenities_id` int(10) UNSIGNED DEFAULT NULL,
  `hotel_id` int(10) UNSIGNED DEFAULT NULL,
  `room_type_id` int(10) UNSIGNED DEFAULT NULL,
  `cost` decimal(12,2) DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_amenities`
--

INSERT INTO `room_amenities` (`id`, `amenities_id`, `hotel_id`, `room_type_id`, `cost`) VALUES
(1, 1, 1, 1, '48149.00'),
(2, 2, 1, 1, '18498.00'),
(3, 3, 1, 3, '5161.00'),
(4, 4, 1, 3, '79018.00'),
(5, 3, 1, 1, '81547.00'),
(6, 2, 1, 2, '58157.00'),
(7, 3, 1, 2, '28235.00'),
(8, 4, 1, 2, '18402.00'),
(9, 1, 1, 3, '79396.00'),
(10, 2, 1, 3, '5941.00'),
(11, 1, 1, 2, '13455.00'),
(12, 4, 1, 1, '8755.00'),
(13, 1, 1, 4, '96014.00'),
(14, 2, 1, 4, '43592.00'),
(15, 3, 1, 4, '36162.00'),
(16, 4, 1, 4, '48324.00'),
(17, 1, 1, 5, '41562.00'),
(18, 2, 1, 5, '20209.00'),
(19, 3, 1, 5, '60084.00'),
(20, 4, 1, 5, '52056.00'),
(21, 1, 2, 1, '85907.00'),
(22, 2, 2, 1, '64803.00'),
(23, 3, 2, 1, '91624.00'),
(24, 4, 2, 1, '52407.00'),
(25, 1, 2, 2, '54864.00'),
(26, 2, 2, 2, '53728.00'),
(27, 3, 2, 2, '27640.00'),
(28, 4, 2, 2, '33641.00'),
(29, 1, 2, 3, '16464.00'),
(30, 2, 2, 3, '82859.00'),
(31, 3, 2, 3, '55611.00'),
(32, 4, 2, 3, '47449.00'),
(33, 2, 2, 4, '904.00'),
(34, 1, 2, 4, '62002.00'),
(35, 3, 2, 4, '91144.00'),
(36, 4, 2, 4, '36312.00'),
(37, 1, 2, 5, '60162.00'),
(38, 2, 2, 5, '56778.00'),
(39, 3, 2, 5, '40971.00'),
(40, 4, 2, 5, '29825.00'),
(41, 1, 3, 1, '30792.00'),
(42, 2, 3, 1, '69426.00'),
(43, 3, 3, 1, '82501.00'),
(44, 4, 3, 1, '42026.00'),
(45, 1, 3, 2, '90183.00'),
(46, 3, 3, 2, '46433.00'),
(47, 2, 3, 2, '84530.00'),
(48, 4, 3, 2, '72119.00'),
(49, 1, 3, 3, '85500.00'),
(50, 2, 3, 3, '17841.00'),
(51, 3, 3, 3, '30172.00'),
(52, 4, 3, 3, '58517.00'),
(53, 1, 3, 4, '48704.00'),
(54, 2, 3, 4, '59696.00'),
(55, 3, 3, 4, '27743.00'),
(56, 4, 3, 4, '16909.00'),
(57, 1, 3, 5, '97176.00'),
(58, 2, 3, 5, '1747.00'),
(59, 3, 3, 5, '57961.00'),
(60, 4, 3, 5, '11567.00'),
(61, 1, 4, 1, '67355.00'),
(62, 2, 4, 1, '80144.00'),
(63, 3, 4, 1, '70326.00'),
(64, 4, 4, 1, '69628.00'),
(65, 1, 4, 2, '35811.00'),
(66, 2, 4, 2, '88511.00'),
(67, 3, 4, 2, '11102.00'),
(68, 4, 4, 2, '67801.00'),
(69, 1, 4, 3, '66775.00'),
(70, 2, 4, 3, '96846.00'),
(71, 3, 4, 3, '7816.00'),
(72, 4, 4, 3, '62389.00'),
(73, 1, 4, 4, '52123.00'),
(74, 2, 4, 4, '80044.00'),
(75, 3, 4, 4, '49037.00'),
(76, 4, 4, 4, '27379.00'),
(77, 1, 4, 5, '21281.00'),
(78, 2, 4, 5, '37541.00'),
(79, 3, 4, 5, '87345.00'),
(80, 4, 4, 5, '57660.00'),
(81, 1, 5, 1, '93276.00'),
(82, 2, 5, 1, '51236.00'),
(83, 4, 5, 1, '8937.00'),
(84, 1, 5, 2, '39626.00'),
(85, 2, 5, 2, '36110.00'),
(86, 3, 5, 2, '99201.00'),
(87, 3, 5, 1, '15476.00'),
(88, 4, 5, 2, '40421.00'),
(89, 1, 5, 3, '14048.00'),
(90, 2, 5, 3, '47493.00'),
(91, 3, 5, 3, '79975.00'),
(92, 4, 5, 3, '10885.00'),
(93, 1, 5, 4, '81019.00'),
(94, 2, 5, 4, '77790.00'),
(95, 3, 5, 4, '61789.00'),
(96, 4, 5, 4, '11084.00'),
(97, 1, 5, 5, '18276.00'),
(98, 2, 5, 5, '94777.00'),
(99, 3, 5, 5, '55555.00'),
(100, 4, 5, 5, '93601.00'),
(101, 1, 6, 1, '31685.00'),
(102, 2, 6, 1, '41980.00'),
(103, 3, 6, 1, '32296.00'),
(104, 4, 6, 1, '30692.00'),
(105, 1, 6, 2, '61079.00'),
(106, 2, 6, 2, '71283.00'),
(107, 3, 6, 2, '21490.00'),
(108, 4, 6, 2, '68032.00'),
(109, 1, 6, 3, '95037.00'),
(110, 2, 6, 3, '70926.00'),
(111, 3, 6, 3, '72113.00'),
(112, 4, 6, 3, '4202.00'),
(113, 1, 6, 4, '84782.00'),
(114, 2, 6, 4, '38328.00'),
(115, 3, 6, 4, '10981.00'),
(116, 4, 6, 4, '83456.00'),
(117, 1, 6, 5, '92017.00'),
(118, 2, 6, 5, '78434.00'),
(119, 3, 6, 5, '53893.00'),
(120, 4, 6, 5, '62260.00'),
(121, 1, 7, 1, '22224.00'),
(122, 2, 7, 1, '10013.00'),
(123, 3, 7, 1, '84900.00'),
(124, 4, 7, 1, '14613.00'),
(125, 1, 7, 2, '69433.00'),
(126, 2, 7, 2, '57324.00'),
(127, 3, 7, 2, '14701.00'),
(128, 4, 7, 2, '81054.00'),
(129, 1, 7, 3, '5901.00'),
(130, 2, 7, 3, '31513.00'),
(131, 3, 7, 3, '43688.00'),
(132, 4, 7, 3, '11997.00'),
(133, 1, 7, 4, '87574.00'),
(134, 2, 7, 4, '63294.00'),
(135, 3, 7, 4, '4350.00'),
(136, 4, 7, 4, '69930.00'),
(137, 1, 7, 5, '5680.00'),
(138, 2, 7, 5, '86504.00'),
(139, 3, 7, 5, '93280.00'),
(140, 4, 7, 5, '60094.00'),
(141, 2, 8, 1, '12562.00'),
(142, 1, 8, 1, '76965.00'),
(143, 3, 8, 1, '92164.00'),
(144, 4, 8, 1, '85546.00'),
(145, 1, 8, 2, '37662.00'),
(146, 2, 8, 2, '962.00'),
(147, 3, 8, 2, '73097.00'),
(148, 4, 8, 2, '82192.00'),
(149, 1, 8, 3, '1110.00'),
(150, 2, 8, 3, '38955.00'),
(151, 3, 8, 3, '14416.00'),
(152, 4, 8, 3, '15633.00'),
(153, 1, 8, 4, '64334.00'),
(154, 2, 8, 4, '92748.00'),
(155, 3, 8, 4, '81680.00'),
(156, 4, 8, 4, '10649.00'),
(157, 1, 8, 5, '76795.00'),
(158, 2, 8, 5, '49088.00'),
(159, 3, 8, 5, '37179.00'),
(160, 3, 9, 1, '71980.00'),
(161, 4, 8, 5, '91424.00'),
(162, 4, 9, 1, '23383.00'),
(163, 1, 9, 1, '80233.00'),
(164, 2, 9, 1, '96376.00'),
(165, 1, 9, 2, '53754.00'),
(166, 2, 9, 2, '99846.00'),
(167, 3, 9, 2, '88304.00'),
(168, 4, 9, 2, '23269.00'),
(169, 1, 9, 3, '54795.00'),
(170, 2, 9, 3, '27360.00'),
(171, 3, 9, 3, '92253.00'),
(172, 4, 9, 3, '34174.00'),
(173, 1, 9, 4, '41583.00'),
(174, 2, 9, 4, '95673.00'),
(175, 3, 9, 4, '77265.00'),
(176, 4, 9, 4, '34547.00'),
(177, 1, 9, 5, '53127.00'),
(178, 2, 9, 5, '57913.00'),
(179, 3, 9, 5, '7068.00'),
(180, 4, 9, 5, '18189.00'),
(181, 1, 10, 1, '50217.00'),
(182, 2, 10, 1, '21422.00'),
(183, 3, 10, 1, '8217.00'),
(184, 4, 10, 1, '77007.00'),
(185, 1, 10, 2, '45346.00'),
(186, 2, 10, 2, '41740.00'),
(187, 3, 10, 2, '26428.00'),
(188, 4, 10, 2, '62566.00'),
(189, 1, 10, 3, '66779.00'),
(190, 2, 10, 3, '29615.00'),
(191, 3, 10, 3, '83334.00'),
(192, 4, 10, 3, '11824.00'),
(193, 1, 10, 4, '36040.00'),
(194, 2, 10, 4, '48785.00'),
(195, 3, 10, 4, '54528.00'),
(196, 4, 10, 4, '29379.00'),
(197, 1, 10, 5, '63203.00'),
(198, 2, 10, 5, '18118.00'),
(199, 3, 10, 5, '10734.00'),
(200, 4, 10, 5, '47538.00');

-- --------------------------------------------------------

--
-- Table structure for table `room_costs`
--

CREATE TABLE `room_costs` (
  `id` int(10) UNSIGNED NOT NULL,
  `hotel_id` int(10) UNSIGNED DEFAULT NULL,
  `room_type_id` int(10) UNSIGNED DEFAULT NULL,
  `cost` decimal(12,2) DEFAULT NULL,
  `discount` float(4,1) DEFAULT NULL,
  `breakfast_included` decimal(12,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_costs`
--

INSERT INTO `room_costs` (`id`, `hotel_id`, `room_type_id`, `cost`, `discount`, `breakfast_included`) VALUES
(1, 1, 1, '147524.00', 6.0, '96234.00'),
(2, 1, 2, '1491409.00', 55.0, '46853.00'),
(3, 1, 3, '503261.00', 49.0, '34692.00'),
(4, 1, 4, '1741115.00', 75.0, '77902.00'),
(5, 1, 5, '294113.00', 64.0, '41918.00'),
(6, 2, 1, '921486.00', 72.0, '51526.00'),
(7, 2, 2, '1768756.00', 78.0, '44347.00'),
(8, 2, 3, '1764977.00', 26.0, '71556.00'),
(9, 2, 4, '519902.00', 44.0, '73650.00'),
(10, 2, 5, '1446771.00', 89.0, '42078.00'),
(11, 3, 1, '1759956.00', 21.0, '44241.00'),
(12, 3, 2, '36832.00', 5.0, '31628.00'),
(13, 3, 3, '1360148.00', 43.0, '92477.00'),
(14, 3, 4, '1300002.00', 50.0, '78235.00'),
(15, 3, 5, '1306164.00', 12.0, '67343.00'),
(16, 4, 1, '23316.00', 23.0, '64280.00'),
(17, 4, 2, '349497.00', 72.0, '62089.00'),
(18, 4, 3, '454929.00', 12.0, '40855.00'),
(19, 4, 4, '901227.00', 75.0, '98084.00'),
(20, 4, 5, '953786.00', 7.0, '17910.00'),
(21, 5, 1, '1927807.00', 1.0, '25259.00'),
(22, 5, 2, '828256.00', 76.0, '60310.00'),
(23, 5, 3, '41946.00', 7.0, '29017.00'),
(24, 5, 4, '163495.00', 47.0, '35121.00'),
(25, 5, 5, '1267413.00', 95.0, '38475.00'),
(26, 6, 1, '538103.00', 89.0, '97706.00'),
(27, 6, 2, '400568.00', 26.0, '33311.00'),
(28, 6, 3, '371942.00', 94.0, '64466.00'),
(29, 6, 4, '217216.00', 27.0, '42119.00'),
(30, 6, 5, '396056.00', 34.0, '87420.00'),
(31, 7, 1, '410350.00', 35.0, '97869.00'),
(32, 7, 2, '1104644.00', 74.0, '46624.00'),
(33, 7, 3, '1295750.00', 47.0, '21290.00'),
(34, 7, 4, '267580.00', 42.0, '40535.00'),
(35, 7, 5, '809523.00', 46.0, '25196.00'),
(36, 8, 1, '1203350.00', 35.0, '2743.00'),
(37, 8, 2, '464641.00', 71.0, '87651.00'),
(38, 8, 3, '170573.00', 81.0, '65092.00'),
(39, 8, 4, '1242029.00', 91.0, '92964.00'),
(40, 8, 5, '853072.00', 4.0, '39121.00'),
(41, 9, 1, '1764299.00', 19.0, '58704.00'),
(42, 9, 2, '1168433.00', 62.0, '1268.00'),
(43, 9, 3, '1415278.00', 13.0, '67846.00'),
(44, 9, 4, '367738.00', 66.0, '28630.00'),
(45, 9, 5, '1480088.00', 63.0, '55476.00'),
(46, 10, 1, '1629996.00', 58.0, '93160.00'),
(47, 10, 2, '119792.00', 22.0, '94248.00'),
(48, 10, 3, '901577.00', 15.0, '75496.00'),
(49, 10, 4, '165285.00', 22.0, '97419.00'),
(50, 10, 5, '1562279.00', 0.0, '1698.00');

-- --------------------------------------------------------

--
-- Table structure for table `room_images`
--

CREATE TABLE `room_images` (
  `id` int(10) UNSIGNED NOT NULL,
  `hotel_id` int(10) UNSIGNED DEFAULT NULL,
  `room_type_id` int(10) UNSIGNED DEFAULT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_images`
--

INSERT INTO `room_images` (`id`, `hotel_id`, `room_type_id`, `filename`, `created_at`) VALUES
(1, 1, 1, 'default.png', '2020-01-27 14:59:55'),
(2, 1, 2, 'default.png', '2020-01-27 14:59:55'),
(3, 3, 1, 'default.png', '2020-01-27 14:59:55'),
(4, 3, 2, 'default.png', '2020-01-27 14:59:55'),
(5, 1, 5, 'default.png', '2020-01-27 14:59:55'),
(6, 2, 1, 'default.png', '2020-01-27 14:59:55'),
(7, 2, 4, 'default.png', '2020-01-27 14:59:55'),
(8, 1, 4, 'default.png', '2020-01-27 14:59:55'),
(9, 2, 3, 'default.png', '2020-01-27 14:59:55'),
(10, 2, 5, 'default.png', '2020-01-27 14:59:55'),
(11, 2, 2, 'default.png', '2020-01-27 14:59:55'),
(12, 1, 3, 'default.png', '2020-01-27 14:59:55'),
(13, 3, 3, 'default.png', '2020-01-27 14:59:55'),
(14, 3, 4, 'default.png', '2020-01-27 14:59:55'),
(15, 3, 5, 'default.png', '2020-01-27 14:59:55'),
(16, 4, 1, 'default.png', '2020-01-27 14:59:55'),
(17, 4, 2, 'default.png', '2020-01-27 14:59:55'),
(18, 4, 3, 'default.png', '2020-01-27 14:59:55'),
(19, 4, 4, 'default.png', '2020-01-27 14:59:55'),
(20, 4, 5, 'default.png', '2020-01-27 14:59:55'),
(21, 5, 1, 'default.png', '2020-01-27 14:59:55'),
(22, 5, 2, 'default.png', '2020-01-27 14:59:55'),
(23, 5, 3, 'default.png', '2020-01-27 14:59:55'),
(24, 5, 4, 'default.png', '2020-01-27 14:59:55'),
(25, 5, 5, 'default.png', '2020-01-27 14:59:55'),
(26, 6, 1, 'default.png', '2020-01-27 14:59:55'),
(27, 6, 2, 'default.png', '2020-01-27 14:59:55'),
(28, 6, 3, 'default.png', '2020-01-27 14:59:55'),
(29, 6, 4, 'default.png', '2020-01-27 14:59:55'),
(30, 6, 5, 'default.png', '2020-01-27 14:59:55'),
(31, 7, 1, 'default.png', '2020-01-27 14:59:55'),
(32, 7, 2, 'default.png', '2020-01-27 14:59:55'),
(33, 7, 3, 'default.png', '2020-01-27 14:59:55'),
(34, 7, 4, 'default.png', '2020-01-27 14:59:55'),
(35, 7, 5, 'default.png', '2020-01-27 14:59:55'),
(36, 8, 1, 'default.png', '2020-01-27 14:59:55'),
(37, 8, 2, 'default.png', '2020-01-27 14:59:55'),
(38, 8, 3, 'default.png', '2020-01-27 14:59:55'),
(39, 8, 4, 'default.png', '2020-01-27 14:59:55'),
(40, 8, 5, 'default.png', '2020-01-27 14:59:55'),
(41, 9, 1, 'default.png', '2020-01-27 14:59:55'),
(42, 9, 2, 'default.png', '2020-01-27 14:59:55'),
(43, 9, 3, 'default.png', '2020-01-27 14:59:55'),
(44, 9, 4, 'default.png', '2020-01-27 14:59:55'),
(45, 9, 5, 'default.png', '2020-01-27 14:59:55'),
(46, 10, 1, 'default.png', '2020-01-27 14:59:55'),
(47, 10, 2, 'default.png', '2020-01-27 14:59:55'),
(48, 10, 3, 'default.png', '2020-01-27 14:59:55'),
(49, 10, 4, 'default.png', '2020-01-27 14:59:55'),
(50, 10, 5, 'default.png', '2020-01-27 14:59:55');

-- --------------------------------------------------------

--
-- Table structure for table `room_ratings`
--

CREATE TABLE `room_ratings` (
  `id` int(10) UNSIGNED NOT NULL,
  `hotel_id` int(10) UNSIGNED DEFAULT NULL,
  `room_type_id` int(10) UNSIGNED DEFAULT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `rating` float(2,1) DEFAULT '1.0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_ratings`
--

INSERT INTO `room_ratings` (`id`, `hotel_id`, `room_type_id`, `user_id`, `rating`) VALUES
(1, 1, 1, 2, 5.0),
(2, 1, 1, 3, 0.0),
(3, 1, 2, 2, 3.0),
(4, 1, 2, 3, 4.0),
(5, 1, 1, 6, 2.0),
(6, 1, 1, 11, 2.0),
(7, 1, 1, 4, 1.0),
(8, 1, 1, 9, 2.0),
(9, 1, 1, 10, 1.0),
(10, 1, 1, 8, 3.0),
(11, 1, 1, 5, 0.0),
(12, 1, 1, 7, 3.0),
(13, 1, 2, 4, 0.0),
(14, 1, 2, 5, 1.0),
(15, 1, 2, 6, 2.0),
(16, 1, 2, 7, 4.0),
(17, 1, 2, 8, 5.0),
(18, 1, 2, 9, 2.0),
(19, 1, 2, 10, 5.0),
(20, 1, 3, 2, 5.0),
(21, 1, 2, 11, 0.0),
(22, 1, 3, 3, 0.0),
(23, 1, 3, 4, 1.0),
(24, 1, 3, 5, 2.0),
(25, 1, 3, 6, 0.0),
(26, 1, 3, 7, 3.0),
(27, 1, 3, 8, 0.0),
(28, 1, 3, 9, 0.0),
(29, 1, 3, 10, 5.0),
(30, 1, 3, 11, 4.0),
(31, 1, 4, 2, 4.0),
(32, 1, 4, 3, 4.0),
(33, 1, 4, 4, 4.0),
(34, 1, 4, 5, 0.0),
(35, 1, 4, 6, 4.0),
(36, 1, 4, 7, 0.0),
(37, 1, 4, 8, 0.0),
(38, 1, 4, 9, 5.0),
(39, 1, 4, 10, 0.0),
(40, 1, 4, 11, 5.0),
(41, 1, 5, 2, 2.0),
(42, 1, 5, 3, 3.0),
(43, 1, 5, 4, 5.0),
(44, 1, 5, 5, 3.0),
(45, 1, 5, 6, 0.0),
(46, 1, 5, 7, 4.0),
(47, 1, 5, 8, 5.0),
(48, 1, 5, 9, 5.0),
(49, 1, 5, 10, 0.0),
(50, 1, 5, 11, 3.0),
(51, 2, 1, 2, 3.0),
(52, 2, 1, 3, 0.0),
(53, 2, 1, 4, 3.0),
(54, 2, 1, 5, 4.0),
(55, 2, 1, 6, 1.0),
(56, 2, 1, 7, 3.0),
(57, 2, 1, 8, 2.0),
(58, 2, 1, 9, 3.0),
(59, 2, 1, 10, 0.0),
(60, 2, 1, 11, 2.0),
(61, 2, 2, 3, 0.0),
(62, 2, 2, 2, 5.0),
(63, 2, 2, 5, 0.0),
(64, 2, 2, 6, 1.0),
(65, 2, 2, 7, 1.0),
(66, 2, 2, 4, 4.0),
(67, 2, 2, 8, 5.0),
(68, 2, 2, 9, 1.0),
(69, 2, 2, 10, 1.0),
(70, 2, 2, 11, 1.0),
(71, 2, 3, 2, 0.0),
(72, 2, 3, 3, 1.0),
(73, 2, 3, 4, 1.0),
(74, 2, 3, 5, 2.0),
(75, 2, 3, 6, 1.0),
(76, 2, 3, 7, 5.0),
(77, 2, 3, 8, 1.0),
(78, 2, 3, 9, 5.0),
(79, 2, 3, 10, 4.0),
(80, 2, 3, 11, 3.0),
(81, 2, 4, 2, 4.0),
(82, 2, 4, 3, 2.0),
(83, 2, 4, 4, 1.0),
(84, 2, 4, 5, 4.0),
(85, 2, 4, 6, 2.0),
(86, 2, 4, 7, 0.0),
(87, 2, 4, 8, 1.0),
(88, 2, 4, 9, 4.0),
(89, 2, 4, 10, 1.0),
(90, 2, 4, 11, 1.0),
(91, 2, 5, 2, 0.0),
(92, 2, 5, 3, 1.0),
(93, 2, 5, 4, 5.0),
(94, 2, 5, 5, 3.0),
(95, 2, 5, 6, 2.0),
(96, 2, 5, 7, 1.0),
(97, 3, 1, 2, 5.0),
(98, 2, 5, 8, 4.0),
(99, 3, 1, 3, 5.0),
(100, 3, 1, 4, 3.0),
(101, 2, 5, 9, 5.0),
(102, 2, 5, 10, 4.0),
(103, 2, 5, 11, 0.0),
(104, 3, 1, 5, 1.0),
(105, 3, 1, 6, 0.0),
(106, 3, 1, 7, 4.0),
(107, 3, 1, 8, 2.0),
(108, 3, 1, 9, 4.0),
(109, 3, 1, 10, 2.0),
(110, 3, 1, 11, 3.0),
(111, 3, 2, 2, 0.0),
(112, 3, 2, 3, 2.0),
(113, 3, 2, 4, 1.0),
(114, 3, 2, 5, 2.0),
(115, 3, 2, 6, 2.0),
(116, 3, 2, 7, 0.0),
(117, 3, 2, 8, 3.0),
(118, 3, 2, 9, 2.0),
(119, 3, 2, 10, 1.0),
(120, 3, 2, 11, 2.0),
(121, 3, 3, 2, 5.0),
(122, 3, 3, 3, 4.0),
(123, 3, 3, 4, 0.0),
(124, 3, 3, 5, 5.0),
(125, 3, 3, 6, 1.0),
(126, 3, 3, 7, 3.0),
(127, 3, 3, 8, 0.0),
(128, 3, 3, 9, 4.0),
(129, 3, 3, 10, 2.0),
(130, 3, 3, 11, 0.0),
(131, 3, 4, 2, 5.0),
(132, 3, 4, 3, 4.0),
(133, 3, 4, 5, 2.0),
(134, 3, 4, 4, 0.0),
(135, 3, 4, 6, 1.0),
(136, 3, 4, 7, 5.0),
(137, 3, 4, 8, 0.0),
(138, 3, 4, 9, 3.0),
(139, 3, 4, 10, 0.0),
(140, 3, 4, 11, 4.0),
(141, 3, 5, 2, 3.0),
(142, 3, 5, 3, 0.0),
(143, 3, 5, 4, 2.0),
(144, 3, 5, 6, 4.0),
(145, 3, 5, 7, 4.0),
(146, 3, 5, 5, 5.0),
(147, 3, 5, 8, 1.0),
(148, 3, 5, 9, 5.0),
(149, 3, 5, 10, 2.0),
(150, 3, 5, 11, 3.0),
(151, 4, 1, 2, 3.0),
(152, 4, 1, 3, 3.0),
(153, 4, 1, 4, 5.0),
(154, 4, 1, 5, 3.0),
(155, 4, 1, 6, 5.0),
(156, 4, 1, 7, 0.0),
(157, 4, 1, 8, 1.0),
(158, 4, 1, 9, 3.0),
(159, 4, 1, 10, 2.0),
(160, 4, 1, 11, 3.0),
(161, 4, 2, 2, 1.0),
(162, 4, 2, 3, 2.0),
(163, 4, 2, 4, 2.0),
(164, 4, 2, 5, 3.0),
(165, 4, 2, 6, 1.0),
(166, 4, 2, 7, 0.0),
(167, 4, 2, 8, 3.0),
(168, 4, 2, 9, 1.0),
(169, 4, 2, 10, 0.0),
(170, 4, 2, 11, 2.0),
(171, 4, 3, 2, 4.0),
(172, 4, 3, 3, 5.0),
(173, 4, 3, 4, 1.0),
(174, 4, 3, 5, 0.0),
(175, 4, 3, 6, 0.0),
(176, 4, 3, 8, 5.0),
(177, 4, 3, 10, 3.0),
(178, 4, 3, 9, 4.0),
(179, 4, 3, 7, 0.0),
(180, 4, 3, 11, 2.0),
(181, 4, 4, 2, 4.0),
(182, 4, 4, 3, 5.0),
(183, 4, 4, 4, 2.0),
(184, 4, 4, 5, 1.0),
(185, 4, 4, 6, 4.0),
(186, 4, 4, 7, 4.0),
(187, 4, 4, 8, 1.0),
(188, 4, 4, 9, 0.0),
(189, 4, 4, 10, 4.0),
(190, 4, 4, 11, 3.0),
(191, 4, 5, 2, 0.0),
(192, 4, 5, 3, 0.0),
(193, 4, 5, 4, 2.0),
(194, 4, 5, 5, 0.0),
(195, 4, 5, 6, 0.0),
(196, 4, 5, 7, 3.0),
(197, 4, 5, 8, 3.0),
(198, 4, 5, 9, 4.0),
(199, 4, 5, 10, 2.0),
(200, 4, 5, 11, 4.0),
(201, 5, 1, 2, 5.0),
(202, 5, 1, 3, 1.0),
(203, 5, 1, 4, 5.0),
(204, 5, 1, 5, 0.0),
(205, 5, 1, 6, 0.0),
(206, 5, 1, 7, 0.0),
(207, 5, 1, 8, 3.0),
(208, 5, 1, 9, 2.0),
(209, 5, 1, 10, 4.0),
(210, 5, 1, 11, 1.0),
(211, 5, 2, 2, 4.0),
(212, 5, 2, 3, 3.0),
(213, 5, 2, 4, 2.0),
(214, 5, 2, 5, 1.0),
(215, 5, 2, 6, 5.0),
(216, 5, 2, 7, 4.0),
(217, 5, 2, 8, 5.0),
(218, 5, 2, 9, 4.0),
(219, 5, 2, 10, 0.0),
(220, 5, 2, 11, 1.0),
(221, 5, 3, 2, 4.0),
(222, 5, 3, 3, 5.0),
(223, 5, 3, 4, 4.0),
(224, 5, 3, 5, 2.0),
(225, 5, 3, 6, 0.0),
(226, 5, 3, 7, 4.0),
(227, 5, 3, 8, 3.0),
(228, 5, 3, 9, 0.0),
(229, 5, 3, 10, 4.0),
(230, 5, 3, 11, 5.0),
(231, 5, 4, 2, 1.0),
(232, 5, 4, 3, 5.0),
(233, 5, 4, 4, 5.0),
(234, 5, 4, 5, 5.0),
(235, 5, 4, 6, 5.0),
(236, 5, 4, 7, 4.0),
(237, 5, 4, 8, 3.0),
(238, 5, 4, 9, 5.0),
(239, 5, 4, 10, 2.0),
(240, 5, 4, 11, 1.0),
(241, 5, 5, 2, 3.0),
(242, 5, 5, 3, 4.0),
(243, 5, 5, 4, 0.0),
(244, 5, 5, 5, 3.0),
(245, 5, 5, 6, 0.0),
(246, 5, 5, 7, 1.0),
(247, 5, 5, 8, 0.0),
(248, 5, 5, 9, 3.0),
(249, 5, 5, 10, 5.0),
(250, 5, 5, 11, 3.0),
(251, 6, 1, 2, 2.0),
(252, 6, 1, 3, 5.0),
(253, 6, 1, 4, 2.0),
(254, 6, 1, 5, 1.0),
(255, 6, 1, 7, 1.0),
(256, 6, 1, 8, 0.0),
(257, 6, 1, 6, 1.0),
(258, 6, 1, 9, 0.0),
(259, 6, 1, 10, 2.0),
(260, 6, 1, 11, 2.0),
(261, 6, 2, 2, 4.0),
(262, 6, 2, 3, 2.0),
(263, 6, 2, 4, 3.0),
(264, 6, 2, 5, 2.0),
(265, 6, 2, 6, 0.0),
(266, 6, 2, 7, 4.0),
(267, 6, 2, 8, 1.0),
(268, 6, 2, 9, 0.0),
(269, 6, 2, 10, 4.0),
(270, 6, 2, 11, 5.0),
(271, 6, 3, 2, 0.0),
(272, 6, 3, 3, 2.0),
(273, 6, 3, 4, 1.0),
(274, 6, 3, 5, 2.0),
(275, 6, 3, 6, 0.0),
(276, 6, 3, 7, 5.0),
(277, 6, 3, 8, 5.0),
(278, 6, 3, 9, 3.0),
(279, 6, 3, 10, 1.0),
(280, 6, 3, 11, 3.0),
(281, 6, 4, 2, 4.0),
(282, 6, 4, 3, 4.0),
(283, 6, 4, 4, 4.0),
(284, 6, 4, 5, 0.0),
(285, 6, 4, 6, 0.0),
(286, 6, 4, 7, 2.0),
(287, 6, 4, 8, 2.0),
(288, 6, 4, 9, 0.0),
(289, 6, 4, 10, 1.0),
(290, 6, 4, 11, 5.0),
(291, 6, 5, 2, 5.0),
(292, 6, 5, 3, 0.0),
(293, 6, 5, 4, 5.0),
(294, 6, 5, 5, 3.0),
(295, 6, 5, 6, 1.0),
(296, 6, 5, 7, 2.0),
(297, 6, 5, 8, 5.0),
(298, 6, 5, 10, 0.0),
(299, 6, 5, 9, 1.0),
(300, 6, 5, 11, 0.0),
(301, 7, 1, 2, 3.0),
(302, 7, 1, 4, 5.0),
(303, 7, 1, 3, 1.0),
(304, 7, 1, 5, 3.0),
(305, 7, 1, 6, 4.0),
(306, 7, 1, 7, 1.0),
(307, 7, 1, 8, 0.0),
(308, 7, 1, 9, 3.0),
(309, 7, 1, 10, 5.0),
(310, 7, 1, 11, 2.0),
(311, 7, 2, 2, 5.0),
(312, 7, 2, 3, 1.0),
(313, 7, 2, 4, 3.0),
(314, 7, 2, 5, 5.0),
(315, 7, 2, 6, 2.0),
(316, 7, 2, 7, 1.0),
(317, 7, 2, 8, 5.0),
(318, 7, 2, 9, 2.0),
(319, 7, 2, 10, 4.0),
(320, 7, 2, 11, 0.0),
(321, 7, 3, 2, 0.0),
(322, 7, 3, 3, 2.0),
(323, 7, 3, 4, 3.0),
(324, 7, 3, 5, 3.0),
(325, 7, 3, 6, 0.0),
(326, 7, 3, 7, 2.0),
(327, 7, 3, 8, 2.0),
(328, 7, 3, 9, 4.0),
(329, 7, 3, 10, 0.0),
(330, 7, 3, 11, 0.0),
(331, 7, 4, 2, 2.0),
(332, 7, 4, 3, 0.0),
(333, 7, 4, 4, 2.0),
(334, 7, 4, 5, 2.0),
(335, 7, 4, 6, 2.0),
(336, 7, 4, 7, 4.0),
(337, 7, 4, 8, 1.0),
(338, 7, 4, 9, 1.0),
(339, 7, 4, 10, 5.0),
(340, 7, 4, 11, 1.0),
(341, 7, 5, 2, 0.0),
(342, 7, 5, 3, 3.0),
(343, 7, 5, 4, 5.0),
(344, 7, 5, 5, 4.0),
(345, 7, 5, 6, 3.0),
(346, 7, 5, 7, 4.0),
(347, 7, 5, 8, 1.0),
(348, 7, 5, 9, 2.0),
(349, 7, 5, 10, 5.0),
(350, 7, 5, 11, 2.0),
(351, 8, 1, 2, 4.0),
(352, 8, 1, 3, 4.0),
(353, 8, 1, 4, 5.0),
(354, 8, 1, 5, 1.0),
(355, 8, 1, 6, 0.0),
(356, 8, 1, 7, 3.0),
(357, 8, 1, 8, 3.0),
(358, 8, 1, 9, 0.0),
(359, 8, 1, 10, 5.0),
(360, 8, 1, 11, 0.0),
(361, 8, 2, 2, 4.0),
(362, 8, 2, 3, 0.0),
(363, 8, 2, 4, 4.0),
(364, 8, 2, 5, 3.0),
(365, 8, 2, 6, 4.0),
(366, 8, 2, 7, 0.0),
(367, 8, 2, 8, 4.0),
(368, 8, 2, 9, 5.0),
(369, 8, 2, 10, 2.0),
(370, 8, 2, 11, 4.0),
(371, 8, 3, 2, 0.0),
(372, 8, 3, 3, 3.0),
(373, 8, 3, 5, 3.0),
(374, 8, 3, 6, 2.0),
(375, 8, 3, 4, 3.0),
(376, 8, 3, 7, 3.0),
(377, 8, 3, 8, 4.0),
(378, 8, 3, 9, 0.0),
(379, 8, 3, 10, 3.0),
(380, 8, 3, 11, 4.0),
(381, 8, 4, 2, 0.0),
(382, 8, 4, 3, 0.0),
(383, 8, 4, 4, 5.0),
(384, 8, 4, 5, 2.0),
(385, 8, 4, 6, 0.0),
(386, 8, 4, 7, 5.0),
(387, 8, 4, 8, 2.0),
(388, 8, 4, 9, 2.0),
(389, 8, 4, 10, 5.0),
(390, 8, 4, 11, 3.0),
(391, 8, 5, 2, 3.0),
(392, 8, 5, 3, 2.0),
(393, 8, 5, 4, 2.0),
(394, 8, 5, 5, 2.0),
(395, 8, 5, 6, 3.0),
(396, 8, 5, 7, 0.0),
(397, 8, 5, 8, 3.0),
(398, 8, 5, 9, 3.0),
(399, 8, 5, 10, 2.0),
(400, 8, 5, 11, 2.0),
(401, 9, 1, 2, 0.0),
(402, 9, 1, 3, 2.0),
(403, 9, 1, 4, 2.0),
(404, 9, 1, 5, 5.0),
(405, 9, 1, 6, 4.0),
(406, 9, 1, 7, 1.0),
(407, 9, 1, 8, 0.0),
(408, 9, 1, 9, 5.0),
(409, 9, 1, 10, 4.0),
(410, 9, 1, 11, 4.0),
(411, 9, 2, 2, 4.0),
(412, 9, 2, 3, 2.0),
(413, 9, 2, 4, 2.0),
(414, 9, 2, 5, 4.0),
(415, 9, 2, 6, 3.0),
(416, 9, 2, 7, 4.0),
(417, 9, 2, 8, 4.0),
(418, 9, 2, 9, 4.0),
(419, 9, 2, 10, 2.0),
(420, 9, 2, 11, 1.0),
(421, 9, 3, 2, 1.0),
(422, 9, 3, 3, 4.0),
(423, 9, 3, 4, 1.0),
(424, 9, 3, 5, 5.0),
(425, 9, 3, 6, 1.0),
(426, 9, 3, 7, 3.0),
(427, 9, 3, 8, 0.0),
(428, 9, 3, 9, 4.0),
(429, 9, 3, 10, 4.0),
(430, 9, 3, 11, 2.0),
(431, 9, 4, 2, 0.0),
(432, 9, 4, 3, 0.0),
(433, 9, 4, 4, 5.0),
(434, 9, 4, 5, 2.0),
(435, 9, 4, 6, 2.0),
(436, 9, 4, 7, 1.0),
(437, 9, 4, 8, 5.0),
(438, 9, 4, 9, 5.0),
(439, 9, 4, 10, 0.0),
(440, 9, 4, 11, 0.0),
(441, 9, 5, 2, 5.0),
(442, 9, 5, 3, 5.0),
(443, 9, 5, 4, 0.0),
(444, 9, 5, 5, 0.0),
(445, 9, 5, 6, 1.0),
(446, 9, 5, 7, 5.0),
(447, 9, 5, 8, 4.0),
(448, 9, 5, 9, 5.0),
(449, 9, 5, 10, 3.0),
(450, 9, 5, 11, 3.0),
(451, 10, 1, 2, 0.0),
(452, 10, 1, 3, 3.0),
(453, 10, 1, 4, 3.0),
(454, 10, 1, 5, 1.0),
(455, 10, 1, 6, 5.0),
(456, 10, 1, 7, 4.0),
(457, 10, 1, 8, 0.0),
(458, 10, 1, 9, 3.0),
(459, 10, 1, 10, 4.0),
(460, 10, 1, 11, 2.0),
(461, 10, 2, 2, 3.0),
(462, 10, 2, 3, 0.0),
(463, 10, 2, 4, 4.0),
(464, 10, 2, 5, 5.0),
(465, 10, 2, 6, 4.0),
(466, 10, 2, 7, 4.0),
(467, 10, 2, 8, 1.0),
(468, 10, 2, 9, 3.0),
(469, 10, 2, 10, 3.0),
(470, 10, 2, 11, 4.0),
(471, 10, 3, 2, 3.0),
(472, 10, 3, 3, 2.0),
(473, 10, 3, 4, 2.0),
(474, 10, 3, 5, 5.0),
(475, 10, 3, 6, 2.0),
(476, 10, 3, 7, 5.0),
(477, 10, 3, 8, 4.0),
(478, 10, 3, 9, 1.0),
(479, 10, 3, 10, 2.0),
(480, 10, 3, 11, 0.0),
(481, 10, 4, 2, 0.0),
(482, 10, 4, 3, 3.0),
(483, 10, 4, 4, 0.0),
(484, 10, 4, 5, 2.0),
(485, 10, 4, 6, 0.0),
(486, 10, 4, 7, 1.0),
(487, 10, 4, 8, 5.0),
(488, 10, 4, 9, 0.0),
(489, 10, 4, 10, 2.0),
(490, 10, 4, 11, 0.0),
(491, 10, 5, 2, 1.0),
(492, 10, 5, 3, 5.0),
(493, 10, 5, 4, 3.0),
(494, 10, 5, 5, 0.0),
(495, 10, 5, 6, 3.0),
(496, 10, 5, 7, 0.0),
(497, 10, 5, 8, 2.0),
(498, 10, 5, 9, 0.0),
(499, 10, 5, 10, 3.0),
(500, 10, 5, 11, 3.0);

-- --------------------------------------------------------

--
-- Table structure for table `room_types`
--

CREATE TABLE `room_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_types`
--

INSERT INTO `room_types` (`id`, `name`, `description`) VALUES
(1, 'Veniam reiciendis officiis laborum repudiandae itaque modi.', 'Reprehenderit et quis minus et. Placeat asperiores et rerum. Qui suscipit veniam saepe commodi id quaerat minima. Est amet laudantium veniam tenetur voluptas et. Voluptatibus doloremque quibusdam et. Provident optio eos enim rem aut repellat veritatis illo iusto.'),
(2, 'Ut est eum dolor tempora aliquid.', 'Cupiditate necessitatibus dignissimos libero quia sed quisquam. Ut beatae ratione laboriosam. Eum repellendus officia repellendus corrupti. Omnis modi dolorum omnis et ad sapiente officia quae. Et quia natus odit repellat aut possimus est. Error beatae officiis deserunt voluptas consequatur.'),
(3, 'Rerum et neque consectetur.', 'Velit aut nostrum nihil iusto facilis eius quaerat minima reprehenderit. Quia nisi consequuntur voluptas eius ut odit et qui. Qui aut quae aut recusandae ut inventore.'),
(4, 'Eum quae magnam nostrum est distinctio qui exercitationem.', 'Dolore ut aut cum omnis aut cumque eaque ut. Natus vero minima veniam cum minus minus vero tempora tenetur. Officia et recusandae porro ratione.'),
(5, 'Ut illo nesciunt.', 'Itaque non voluptate. Iusto eum in corrupti alias consequatur iusto in nam quia. Quia facilis animi voluptas maiores.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `phone`, `title`, `image`, `role_id`, `created_at`, `updated_at`) VALUES
(1, 'admin', '', 'admin@karcis.com', '$2a$10$07IJH3CtPROgHeBmhtDLPuUmRyKDXP33HQ/TRQ2zE8nuFa09JlYWy', '+62987676522', NULL, 'default.png', 1, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(2, 'Zella', 'Watsica', 'Lacey.Kemmer52@gmail.com', '$2a$10$mN48FysbHdieAm2EwHKYdutpBpqrg4LO8scf9x0oOYV/YsaW5ZWmS', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(3, 'Dereck', 'Maggio', 'Garland_Beer78@gmail.com', '$2a$10$ZWu3EattY9pqgaYyFMghaOEwie13FpAszaDAzEUyszl0DzqhNxb4S', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(4, 'Elijah', 'Lind', 'Jairo.Denesik15@yahoo.com', '$2a$10$33VU6qlK4YMZA7xMYDeWFuHyqwOX905itWC2PEDDNl/WBdHoMjfSO', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(5, 'Jarod', 'Hauck', 'Donny_Frami8@hotmail.com', '$2a$10$ObHyDmqzFf9HNKXYmDTn7OqX4pEtSxkfFSY2.jZzKJFeGupWH1.bS', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(6, 'Maiya', 'Schumm', 'Tommie_Spinka58@hotmail.com', '$2a$10$PCA4wxGTLwhsqthj7.KnS.eWxBZsyTy.RrNMBZgKZk1Gx2uqGc7aS', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(7, 'Isaac', 'Ankunding', 'Rosalia_Lind93@gmail.com', '$2a$10$09zE1jiH3pBK.JW2lcqAouosoR0k9Av2mk7jxwVImwAfdX6zrrTCS', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(8, 'Jaylen', 'Bode', 'Virgie.Mohr3@gmail.com', '$2a$10$31whF0e3D9WXzBO/K427XOEaTSrl/rQY82RHclZqIvip81c3aEjC.', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(9, 'Bridie', 'VonRueden', 'Alessandra82@gmail.com', '$2a$10$9YYt3mxxcrDWToDong0sKuCryMVgQU7vp/buf36KuPxtGK4iEPudS', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(10, 'Neha', 'Rath', 'Timmy34@yahoo.com', '$2a$10$3ZyVJRYlNgo/ssIkbU85zejjQZZ18Gkq1MX6.1Iva3AdSZDGGamBe', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54'),
(11, 'Lamar', 'Christiansen', 'Iliana51@gmail.com', '$2a$10$X1YaXyZbnPPlgAT.jZrDT.Do/EelktoD3EqTpTtlL5CNTdMVoAKsK', '+62987676522', NULL, 'default.png', 2, '2020-01-27 14:59:54', '2020-01-27 14:59:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `amenities`
--
ALTER TABLE `amenities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `balances`
--
ALTER TABLE `balances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `balances_user_id_foreign` (`user_id`);

--
-- Indexes for table `balance_histories`
--
ALTER TABLE `balance_histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `balance_histories_user_id_foreign` (`user_id`),
  ADD KEY `balance_histories_balance_id_foreign` (`balance_id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cities_province_id_foreign` (`province_id`);

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hotels_name_unique` (`name`),
  ADD KEY `hotels_city_id_foreign` (`city_id`),
  ADD KEY `hotels_province_id_foreign` (`province_id`);

--
-- Indexes for table `hotel_amenities`
--
ALTER TABLE `hotel_amenities`
  ADD KEY `hotel_amenities_amenities_id_foreign` (`amenities_id`),
  ADD KEY `hotel_amenities_hotel_id_foreign` (`hotel_id`);

--
-- Indexes for table `hotel_images`
--
ALTER TABLE `hotel_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_images_hotel_id_foreign` (`hotel_id`);

--
-- Indexes for table `hotel_orders`
--
ALTER TABLE `hotel_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `hotel_orders_room_type_id_foreign` (`room_type_id`),
  ADD KEY `hotel_orders_hotel_id_foreign` (`hotel_id`),
  ADD KEY `hotel_orders_user_id_foreign` (`user_id`);

--
-- Indexes for table `hotel_rooms`
--
ALTER TABLE `hotel_rooms`
  ADD UNIQUE KEY `hotel_rooms_room_type_id_hotel_id_unique` (`room_type_id`,`hotel_id`),
  ADD KEY `hotel_rooms_hotel_id_foreign` (`hotel_id`);

--
-- Indexes for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  ADD PRIMARY KEY (`index`);

--
-- Indexes for table `otp_codes`
--
ALTER TABLE `otp_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `provinces`
--
ALTER TABLE `provinces`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `revoked_token`
--
ALTER TABLE `revoked_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_amenities`
--
ALTER TABLE `room_amenities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_amenities_amenities_id_foreign` (`amenities_id`),
  ADD KEY `room_amenities_hotel_id_foreign` (`hotel_id`),
  ADD KEY `room_amenities_room_type_id_foreign` (`room_type_id`);

--
-- Indexes for table `room_costs`
--
ALTER TABLE `room_costs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_costs_hotel_id_foreign` (`hotel_id`),
  ADD KEY `room_costs_room_type_id_foreign` (`room_type_id`);

--
-- Indexes for table `room_images`
--
ALTER TABLE `room_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_images_hotel_id_foreign` (`hotel_id`),
  ADD KEY `room_images_room_type_id_foreign` (`room_type_id`);

--
-- Indexes for table `room_ratings`
--
ALTER TABLE `room_ratings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `room_ratings_hotel_id_foreign` (`hotel_id`),
  ADD KEY `room_ratings_room_type_id_foreign` (`room_type_id`),
  ADD KEY `room_ratings_user_id_foreign` (`user_id`);

--
-- Indexes for table `room_types`
--
ALTER TABLE `room_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_role_id_foreign` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `amenities`
--
ALTER TABLE `amenities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `balances`
--
ALTER TABLE `balances`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `balance_histories`
--
ALTER TABLE `balance_histories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `hotel_images`
--
ALTER TABLE `hotel_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `hotel_orders`
--
ALTER TABLE `hotel_orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `knex_migrations`
--
ALTER TABLE `knex_migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;
--
-- AUTO_INCREMENT for table `knex_migrations_lock`
--
ALTER TABLE `knex_migrations_lock`
  MODIFY `index` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `otp_codes`
--
ALTER TABLE `otp_codes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `provinces`
--
ALTER TABLE `provinces`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `revoked_token`
--
ALTER TABLE `revoked_token`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `room_amenities`
--
ALTER TABLE `room_amenities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;
--
-- AUTO_INCREMENT for table `room_costs`
--
ALTER TABLE `room_costs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT for table `room_images`
--
ALTER TABLE `room_images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;
--
-- AUTO_INCREMENT for table `room_ratings`
--
ALTER TABLE `room_ratings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=501;
--
-- AUTO_INCREMENT for table `room_types`
--
ALTER TABLE `room_types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `balances`
--
ALTER TABLE `balances`
  ADD CONSTRAINT `balances_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `balance_histories`
--
ALTER TABLE `balance_histories`
  ADD CONSTRAINT `balance_histories_balance_id_foreign` FOREIGN KEY (`balance_id`) REFERENCES `balances` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `balance_histories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `cities`
--
ALTER TABLE `cities`
  ADD CONSTRAINT `cities_province_id_foreign` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hotels`
--
ALTER TABLE `hotels`
  ADD CONSTRAINT `hotels_city_id_foreign` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hotels_province_id_foreign` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hotel_amenities`
--
ALTER TABLE `hotel_amenities`
  ADD CONSTRAINT `hotel_amenities_amenities_id_foreign` FOREIGN KEY (`amenities_id`) REFERENCES `amenities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hotel_amenities_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hotel_images`
--
ALTER TABLE `hotel_images`
  ADD CONSTRAINT `hotel_images_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hotel_orders`
--
ALTER TABLE `hotel_orders`
  ADD CONSTRAINT `hotel_orders_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hotel_orders_room_type_id_foreign` FOREIGN KEY (`room_type_id`) REFERENCES `room_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hotel_orders_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hotel_rooms`
--
ALTER TABLE `hotel_rooms`
  ADD CONSTRAINT `hotel_rooms_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hotel_rooms_room_type_id_foreign` FOREIGN KEY (`room_type_id`) REFERENCES `room_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_amenities`
--
ALTER TABLE `room_amenities`
  ADD CONSTRAINT `room_amenities_amenities_id_foreign` FOREIGN KEY (`amenities_id`) REFERENCES `amenities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_amenities_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_amenities_room_type_id_foreign` FOREIGN KEY (`room_type_id`) REFERENCES `room_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_costs`
--
ALTER TABLE `room_costs`
  ADD CONSTRAINT `room_costs_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_costs_room_type_id_foreign` FOREIGN KEY (`room_type_id`) REFERENCES `room_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_images`
--
ALTER TABLE `room_images`
  ADD CONSTRAINT `room_images_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_images_room_type_id_foreign` FOREIGN KEY (`room_type_id`) REFERENCES `room_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_ratings`
--
ALTER TABLE `room_ratings`
  ADD CONSTRAINT `room_ratings_hotel_id_foreign` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_ratings_room_type_id_foreign` FOREIGN KEY (`room_type_id`) REFERENCES `room_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_ratings_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
