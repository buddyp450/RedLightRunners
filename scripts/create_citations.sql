CREATE TABLE citations (
  case_number INTEGER PRIMARY KEY,
  date DATE_TIME NOT NULL,
  address VARCHAR(256) NOT NULL,
  charge VARCHAR(256) NOT NULL,
  charge_description VARCHAR(256) NOT NULL,
  UNIQUE(case_number)
);
