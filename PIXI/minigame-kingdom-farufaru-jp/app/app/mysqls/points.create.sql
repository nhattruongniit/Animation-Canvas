/**
 *
 */
CREATE TABLE IF NOT EXISTS `points` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `stage_id` varchar(100) NOT NULL,
  `point` int(10) NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY on_stage_id_and_point (`stage_id`, `point`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_bin ROW_FORMAT=DYNAMIC;
