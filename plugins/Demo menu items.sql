-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Jul 22, 2023 at 11:07 AM
-- Server version: 10.5.18-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nisaya`
--

-- --------------------------------------------------------

--
-- Table structure for table `wp_nisaya_menu_items`
--

CREATE TABLE `wp_nisaya_menu_items` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `currencySymbol` varchar(10) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `wp_nisaya_menu_items`
--

INSERT INTO `wp_nisaya_menu_items` (`id`, `image`, `title`, `price`, `currencySymbol`, `description`) VALUES
(124, 'https://picsum.photos/300/300', 'Irish Cream Cake 2', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream'),
(125, 'https://picsum.photos/300/300', 'Irish Cream Cake 3', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream'),
(126, 'https://picsum.photos/300/300', 'Irish Cream Cake 4', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream'),
(127, 'https://picsum.photos/300/300', 'Irish Cream Cake 2', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream'),
(128, 'https://picsum.photos/300/300', 'Irish Cream Cake 2', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream'),
(129, 'https://picsum.photos/300/300', 'Irish Cream Cake 2', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream'),
(130, 'https://picsum.photos/300/300', 'Irish Cream Cake 3', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream'),
(131, 'https://picsum.photos/300/300', 'Irish Cream Cake 4', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream'),
(132, 'https://picsum.photos/300/300', 'Irish Cream Cake 2', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream'),
(133, 'https://picsum.photos/300/300', 'Irish Cream Cake 2', 20.00, '$', 'Classic New York style cheesecake with swirls of Irish cream');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `wp_nisaya_menu_items`
--
ALTER TABLE `wp_nisaya_menu_items`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `wp_nisaya_menu_items`
--
ALTER TABLE `wp_nisaya_menu_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=134;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
