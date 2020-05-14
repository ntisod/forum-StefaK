-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 14, 2020 at 09:18 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `yere_forums`
--

-- --------------------------------------------------------

--
-- Table structure for table `Forums`
--

CREATE TABLE `Forums` (
  `forum_id` int(10) UNSIGNED NOT NULL,
  `forum_name` varchar(50) NOT NULL,
  `description` text DEFAULT NULL,
  `amount_of_members` int(10) UNSIGNED DEFAULT 0,
  `amount_of_posts` int(10) UNSIGNED DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Forums`
--

INSERT INTO `Forums` (`forum_id`, `forum_name`, `description`, `amount_of_members`, `amount_of_posts`, `created_at`) VALUES
(2, 'Test', NULL, NULL, NULL, '2020-05-07 18:16:29'),
(3, 'Silent Hill', 'The Silent Hill Fanbase ', NULL, NULL, '2020-05-07 18:17:09');

-- --------------------------------------------------------

--
-- Table structure for table `Members`
--

CREATE TABLE `Members` (
  `member_id` int(10) UNSIGNED NOT NULL,
  `forum_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `date_joined` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Posts`
--

CREATE TABLE `Posts` (
  `post_id` int(10) UNSIGNED NOT NULL,
  `author_id` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `forum_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Posts`
--

INSERT INTO `Posts` (`post_id`, `author_id`, `title`, `content`, `forum_id`) VALUES
(2, 5, 'There was a hole here, it\'s gone now', 'Just a bunch of text my m8s', 3);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`user_id`, `username`, `password`, `createdAt`) VALUES
(3, 'stifano', '$2b$10$H8qgsrIvaXPeM99VZYwOseIVwMwdSaCN3Zm5AqiboOvvqN8IEjf82', '2020-04-30 14:14:09'),
(4, 'stefaki', '$2b$10$rZGtmJZwkrcdW43gXi8xL.yQUpGJp0p5wxSRZKvjOnKUAegom3Ceu', '2020-04-30 14:14:56'),
(5, 'stefak', '$2b$10$A1rUCSo9F8YI5Szn5S4diet1tOZdHVwRb.PMr6FBPGejb7s5dacWO', '2020-04-30 14:39:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Forums`
--
ALTER TABLE `Forums`
  ADD PRIMARY KEY (`forum_id`),
  ADD UNIQUE KEY `name` (`forum_name`);

--
-- Indexes for table `Members`
--
ALTER TABLE `Members`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `User Constraint` (`user_id`),
  ADD KEY `Forum Constraint` (`forum_id`);

--
-- Indexes for table `Posts`
--
ALTER TABLE `Posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `forum_id` (`forum_id`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Forums`
--
ALTER TABLE `Forums`
  MODIFY `forum_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Members`
--
ALTER TABLE `Members`
  MODIFY `member_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Posts`
--
ALTER TABLE `Posts`
  MODIFY `post_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Members`
--
ALTER TABLE `Members`
  ADD CONSTRAINT `Forum Constraint` FOREIGN KEY (`forum_id`) REFERENCES `Forums` (`forum_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `User Constraint` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Constraints for table `Posts`
--
ALTER TABLE `Posts`
  ADD CONSTRAINT `Posts_ibfk_1` FOREIGN KEY (`forum_id`) REFERENCES `Forums` (`forum_id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `Posts_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
