-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Vært: 127.0.0.1
-- Genereringstid: 25. 03 2019 kl. 10:48:29
-- Serverversion: 10.1.34-MariaDB
-- PHP-version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kulturhus`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `adminlogin`
--

CREATE TABLE `adminlogin` (
  `id` int(11) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(72) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `adminlogin`
--

INSERT INTO `adminlogin` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2b$10$rsUF22rsxWo/gdF7C/UF8e6qRRu5RoNqVscGrMos3O0405685kuNK');

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `arrangementer`
--

CREATE TABLE `arrangementer` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `tid` varchar(45) NOT NULL,
  `dato` varchar(45) NOT NULL,
  `varighed` varchar(45) NOT NULL,
  `sted` varchar(45) NOT NULL,
  `pris` varchar(45) NOT NULL,
  `info` varchar(200) NOT NULL,
  `users_id` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Data dump for tabellen `arrangementer`
--

INSERT INTO `arrangementer` (`id`, `title`, `tid`, `dato`, `varighed`, `sted`, `pris`, `info`, `users_id`) VALUES
(1, 'kultur', '-2.00', '22 marts', '1.30', 'Tåstrupstræde 19', '1000', 'Medbring ost', '1'),
(2, 'Kulturforståelse', '10.00 - 12.00', '24 apr', '1.40', 'Maglegårdsvej 18', '250', 'Medbring det gode humør Medbring det gode hum', '2'),
(3, 'Forlæsning m ole kirkegård', '11.20 - 13.00', '10 juni', '1.20', 'Hilmen på nr.2 sky', '400', 'Med bring hat', '3'),
(4, 'Filmaften m james bond', '20.30 - 00.00', '11 dec', 'dnks', 'Yikesstreet 420', '250', 'Dresscode jakkesæt', '4'),
(5, 'Filmaften m jack the ripper', '20.00 - 23.00', '20 jun', '1.20', 'Boldklubvej 30', '444', 'Husk økse', ''),
(7, 'Slik spisning i 4 timer', '13.00 - 17.00', '23 mar 2019', '4 timer', 'Hastrupvej 20', '100', 'Husk lommelygte og termometer', ''),
(8, 'Film brave', '20.00 - 23.30', '23 mar', '1.80', 'Tølløse', '200kr', 'go film', '');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `adminlogin`
--
ALTER TABLE `adminlogin`
  ADD PRIMARY KEY (`id`);

--
-- Indeks for tabel `arrangementer`
--
ALTER TABLE `arrangementer`
  ADD PRIMARY KEY (`id`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `adminlogin`
--
ALTER TABLE `adminlogin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Tilføj AUTO_INCREMENT i tabel `arrangementer`
--
ALTER TABLE `arrangementer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
