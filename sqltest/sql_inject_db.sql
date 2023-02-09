-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
--
-- Genereringstid: 18. 03 2021 kl. 21:19:20
-- Serverversion: 10.3.28-MariaDB-1:10.3.28+maria~focal
-- PHP-version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
--
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `user_details`
--

CREATE TABLE `user_details` (
  `userid` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `gender` varchar(1) NOT NULL,
  `dob` date NOT NULL,
  `country` varchar(30) NOT NULL,
  `email` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `user_details`
--

INSERT INTO `user_details` (`userid`, `password`, `fname`, `lname`, `gender`, `dob`, `country`, `email`) VALUES
('johndoe1', '1234567890', 'John', 'Doe', 'M', '1992-02-07', 'USA', 'johndoe1@doesnotexist.com'),
('janedoe1', 'test1234', 'Jane', 'Doe', 'F', '1992-04-22', 'UK', 'janedoe1@doesnotexist.co.uk');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
