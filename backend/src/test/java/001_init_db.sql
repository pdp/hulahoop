DROP TABLE IF EXISTS MEMBER;

CREATE TABLE MEMBER (
    ID BIGINT PRIMARY KEY AUTO_INCREMENT,
    MEMBERSHIP_NUMBER VARCHAR(256) NOT NULL,
    FIRST_NAME VARCHAR(256) NOT NULL,
    NAME VARCHAR(256) NOT NULL,
    NICK_NAME VARCHAR(256) NOT NULL,
    SEX VARCHAR(256) NOT NULL,
    GENDER_ROLE VARCHAR(256) NOT NULL,
    CREATED_ON TIMESTAMP NULL DEFAULT NULL,
    LASTMODIFIED_ON TIMESTAMP NULL DEFAULT NULL,
    VERSION BIGINT
);