-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 06, 2018 at 09:29 PM
-- Server version: 5.7.23-23
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mysolar7_Tracker`
--

-- --------------------------------------------------------

--
-- Table structure for table `Tracker`
--

CREATE TABLE `Tracker` (
  `Measurement` bigint(20) NOT NULL,
  `Time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Voltage` float NOT NULL,
  `Current` float NOT NULL,
  `Wattage` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `Tracker`
--

INSERT INTO `Tracker` (`Measurement`, `Time`, `Voltage`, `Current`, `Wattage`) VALUES
(1, '2018-12-04 12:57:07', 1.945, -0.0914633, 0),
(3, '2018-12-04 13:00:51', 4.394, -0.0914634, 0.000731707),
(4, '2018-12-04 20:32:49', 4.396, -0.0914634, 0.000731707),
(5, '2018-12-04 20:33:39', 4.392, -0.0914634, 0.000731707),
(6, '2018-12-04 20:34:29', 4.388, -0.0914634, 0.000731707),
(7, '2018-12-04 20:35:19', 4.388, -0.0914634, 0.000731707),
(8, '2018-12-04 20:36:10', 4.384, -0.0914634, 0.000731707),
(9, '2018-12-04 20:37:00', 4.384, -0.0914634, 0.000731707),
(10, '2018-12-04 20:37:39', 4.968, 0.402439, 0.00182927),
(11, '2018-12-04 20:38:29', 1.948, -0.0914634, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Tracker`
--
ALTER TABLE `Tracker`
  ADD PRIMARY KEY (`Measurement`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Tracker`
--
ALTER TABLE `Tracker`
  MODIFY `Measurement` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
