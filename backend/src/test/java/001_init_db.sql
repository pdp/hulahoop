DROP INDEX IF EXISTS idx_membership_number;
DROP TABLE IF EXISTS Member;
DROP SEQUENCE IF EXISTS MEMBER_SEQ;

CREATE TABLE Member (
  ID INTEGER NOT NULL ,
  MEMBERSHIP_NUMBER VARCHAR(256) NOT NULL,
  FIRST_NAME VARCHAR(256) NOT NULL,
  NAME VARCHAR(256) NOT NULL,
  NICK_NAME VARCHAR(256) NOT NULL,
  GENDER_ROLE VARCHAR(256) NOT NULL,
  SEX VARCHAR(256) NOT NULL,
  LENGTH SMALLINT,
  WEIGHT SMALLINT,
  CREATED_ON TIMESTAMP NULL DEFAULT NULL,
  LASTMODIFIED_ON TIMESTAMP NULL DEFAULT NULL,
  VERSION BIGINT,
  PRIMARY KEY(ID)
);

CREATE UNIQUE INDEX idx_membership_number ON Member (MEMBERSHIP_NUMBER);

CREATE SEQUENCE MEMBER_SEQ START WITH 1;


CREATE TABLE GEOGRAPHICAL_DATA (
  ID INTEGER NOT NULL ,
  ZIPCODE VARCHAR(60),
  MUNICIPALITY VARCHAR(120),
  PROVINCE VARCHAR(120),
  VERSION BIGINT,
  CREATED_ON TIMESTAMP NULL DEFAULT NULL,
  LASTMODIFIED_ON TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY(ID)
);

CREATE INDEX idx_geo_data_zipcode ON GEOGRAPHICAL_DATA (ZIPCODE);
CREATE INDEX idx_geo_data_municipality ON GEOGRAPHICAL_DATA (MUNICIPALITY);
CREATE INDEX idx_geo_data_province ON GEOGRAPHICAL_DATA (PROVINCE);

CREATE SEQUENCE GEO_DATA_SEQ START WITH 1;

INSERT INTO GEOGRAPHICAL_DATA (ID, ZIPCODE, MUNICIPALITY, PROVINCE, VERSION, CREATED_ON, LASTMODIFIED_ON)
VALUES
  (1, '2000', 'Antwerpen', 'Antwerpen', 1, current_timestamp, current_timestamp),
  (1, '2050', 'Linkeroever', 'Antwerpen', 1, current_timestamp, current_timestamp),
  (1, '2100', 'Deurne', 'Antwerpen', 1, current_timestamp, current_timestamp),
  (1, '2140', 'Borgerhout', 'Antwerpen', 1, current_timestamp, current_timestamp),
  (1, '9000', 'Gent', 'Oost-Vlaanderen', 1, current_timestamp, current_timestamp),
  (1, '3000', 'Leuven', 'Vlaams-Brabant', 1, current_timestamp, current_timestamp),
  (1, '1060', 'Sint-Gillis', 'Brussel', 1, current_timestamp, current_timestamp),
  (1, '3500', 'Hasselt', 'Limburg', 1, current_timestamp, current_timestamp),
  (1, '9120', 'Beveren-Waas', 'Oost-Vlaanderen', 1, current_timestamp, current_timestamp),
  (1, '8500', 'Kortijk', 'West-Vlaanderen', 1, current_timestamp, current_timestamp);
