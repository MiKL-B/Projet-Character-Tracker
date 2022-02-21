DROP TABLE IF EXISTS GROUP_ACCOUNT;
DROP TABLE IF EXISTS GROUP_PERMISSION_SCHEMA;
DROP TABLE IF EXISTS RELATION;
DROP TABLE IF EXISTS FAMILY_PERSONAGE;
DROP TABLE IF EXISTS Personage;
DROP TABLE IF EXISTS Privacy;
DROP TABLE IF EXISTS Race;
DROP TABLE IF EXISTS GroupUser;
DROP TABLE IF EXISTS Schema;
DROP TABLE IF EXISTS Permission;
DROP TABLE IF EXISTS Account;
DROP TABLE IF EXISTS Event;
DROP TABLE IF EXISTS Family;
CREATE TABLE Family(
  id_family SERIAL,
  name_family VARCHAR(50),
  desc_family TEXT,
  img_family VARCHAR(50),
  PRIMARY KEY(id_family)
);
CREATE TABLE Event(
  id_event SERIAL,
  date_event VARCHAR(50),
  order_event INTEGER NOT NULL,
  desc_event TEXT,
  place_event VARCHAR(50),
  name_event VARCHAR(50),
  PRIMARY KEY(id_event),
  UNIQUE(order_event)
);
CREATE TABLE Account(
  id_account SERIAL,
  username VARCHAR(50),
  password_hash bytea,
  password_salt bytea,
  is_admin BOOLEAN,
  mail VARCHAR(100),
  img_user VARCHAR(50),
  PRIMARY KEY(id_account)
);
CREATE TABLE Permission(
  id_permission SERIAL,
  level_permission SMALLINT,
  PRIMARY KEY(id_permission)
);
CREATE TABLE Schema(
  id_schema SERIAL,
  is_public BOOLEAN NOT NULL,
  name_schema VARCHAR(50) NOT NULL,
  desc_schema TEXT,
  readable_date BOOLEAN,
  img_schema VARCHAR(50),
  PRIMARY KEY(id_schema)
);
CREATE TABLE GroupUser(
  id_group_user SERIAL,
  img_group VARCHAR(50),
  desc_group TEXT,
  private BOOLEAN NOT NULL,
  PRIMARY KEY(id_group_user)
);
CREATE TABLE Race(
  id_race SERIAL,
  name_race VARCHAR(50),
  PRIMARY KEY(id_race)
);
CREATE TABLE Privacy(
  id_Privacy SERIAL,
  type_privacy VARCHAR(50) NOT NULL,
  PRIMARY KEY(id_Privacy)
);
CREATE TABLE Personage(
  id_personage SERIAL,
  lastname_pers VARCHAR(50),
  firstname_pers VARCHAR(50),
  birthdate_pers VARCHAR(50),
  deathdate_pers VARCHAR(50),
  gender_pers VARCHAR(50),
  img_pers VARCHAR(50),
  id_race INTEGER,
  id_schema INTEGER NOT NULL,
  PRIMARY KEY(id_personage),
  FOREIGN KEY(id_race) REFERENCES Race(id_race),
  FOREIGN KEY(id_schema) REFERENCES Schema(id_schema) ON DELETE CASCADE
);
CREATE TABLE FAMILY_PERSONAGE(
  id_personage INTEGER,
  id_family INTEGER,
  PRIMARY KEY(id_personage, id_family),
  FOREIGN KEY(id_personage) REFERENCES Personage(id_personage),
  FOREIGN KEY(id_family) REFERENCES Family(id_family)
);
CREATE TABLE RELATION(
  actor INTEGER,
  target INTEGER,
  id_privacy INTEGER,
  id_event INTEGER,
  id_relation SERIAL NOT NULL,
  relationship VARCHAR(50),
  affinity INTEGER,
  PRIMARY KEY(actor, target, Id_Privacy, id_event),
  UNIQUE(id_relation),
  FOREIGN KEY(actor) REFERENCES Personage(id_personage),
  FOREIGN KEY(target) REFERENCES Personage(id_personage),
  FOREIGN KEY(id_Privacy) REFERENCES Privacy(id_Privacy),
  FOREIGN KEY(id_event) REFERENCES Event(id_event)
);
CREATE TABLE GROUP_PERMISSION_SCHEMA(
  id_permission INTEGER,
  id_schema INTEGER,
  id_group_user INTEGER,
  PRIMARY KEY(id_permission, id_schema, id_group_user),
  FOREIGN KEY(id_permission) REFERENCES Permission(id_permission),
  FOREIGN KEY(id_schema) REFERENCES Schema(id_schema),
  FOREIGN KEY(id_group_user) REFERENCES GroupUser(id_group_user)
);
CREATE TABLE GROUP_ACCOUNT(
  id_account INTEGER,
  id_group_user INTEGER,
  PRIMARY KEY(id_account, id_group_user),
  FOREIGN KEY(id_account) REFERENCES Account(id_account),
  FOREIGN KEY(id_group_user) REFERENCES GroupUser(id_group_user)
);
INSERT INTO
  Account(username, password, is_admin, mail)
VALUES
  ('michel', 'pass', true, 'michel@gmail.com'),
  ('paul', '1234', false, 'paul@gmail.com'),
  ('jean', 'word', false, 'jean@gmail.com'),
  ('maurice', 'password', true, 'maurice@gmail.com'),
  ('edwouard', 'pass', true, 'edwouard@gmail.com');
INSERT INTO
  Race(name_race)
VALUES
  ('Orc'),
  ('Elfe'),
  ('Nain'),
  ('Poney'),
  ('Licorne'),
  ('Humain');
INSERT INTO
  Schema(is_public, name_schema, desc_schema, readable_date)
VALUES
  (
    false,
    'GOT',
    'schema de games of thrones la serie tv',
    false
  ),
  (
    false,
    'STARWARS',
    'schema de la guerre des etoiles',
    false
  );
INSERT INTO
  Personage(
    lastname_pers,
    firstname_pers,
    birthdate_pers,
    deathdate_pers,
    gender_pers,
    id_race,
    id_schema
  )
VALUES
  ('snow', 'jon', '1980', '2020', 'homme', 1, 1),
  ('indiana', 'jones', '1980', '2024', 'homme', 2, 2),
  (
    'Reine des neiges',
    'Elsa',
    '1980',
    '2400',
    'femme',
    1,
    2
  ),
  ('Michel', 'Maurice', '1980', '2020', 'homme', 3, 1),
  ('SkyWalker', 'Luke', '1980', '2020', 'jedi', 4, 1);
INSERT INTO
  Family(name_family, desc_family)
VALUES
  ('Skywalker', 'la famille a luke'),
  ('snow', 'il a pas de famille');
INSERT INTO
  family_personage(id_personage, id_family)
VALUES
  (5, 1),
  (1, 2);
INSERT INTO
  groupuser(desc_group, private)
VALUES
  ('le groupe du projet charactertracker', true);
INSERT INTO
  group_account(id_account, id_group_user)
VALUES
  (1, 1),
  (2, 1),
  (3, 1);
INSERT INTO
  Permission(level_permission)
VALUES
  (1);
INSERT INTO
  group_permission_schema(id_permission, id_schema, id_group_user)
VALUES
  (1, 2, 1);
INSERT INTO
  Event(
    date_event,
    order_event,
    desc_event,
    place_event,
    name_event
  )
VALUES
  (
    '1980',
    1,
    'premiere relation',
    'teletravail',
    'relation surtout tele'
  );
INSERT INTO
  Privacy(type_privacy)
VALUES
  ('secrete');
INSERT INTO
  Relation(
    actor,
    target,
    id_privacy,
    id_event,
    id_relation,
    relationship,
    affinity
  )
VALUES
  (1, 2, 1, 1, 1, 'cousins', 5);