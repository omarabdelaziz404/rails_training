/*1.Revising Aggregations - The Sum Function*/
SELECT SUM(POPULATION)
From CITY 
WHERE DISTRICT = 'California';

/*2.Average Population*/
SELECT ROUND(AVG(POPULATION), 0)
From CITY;

/*3.African Cities*/
SELECT CITY.NAME 
FROM CITY 
JOIN COUNTRY ON CITY.COUNTRYCODE = COUNTRY.CODE 
WHERE COUNTRY.CONTINENT = 'Africa';

/*4.Average Population of Each Continent*/
SELECT COUNTRY.CONTINENT, FLOOR(AVG(CITY.POPULATION))
FROM CITY
JOIN COUNTRY ON CITY.COUNTRYCODE = COUNTRY.CODE
GROUP BY COUNTRY.CONTINENT;

/*5.Placements*/
SELECT Students.Name
FROM Friends
JOIN Packages p1 ON Friends.ID = p1.ID
JOIN Students ON Friends.ID = Students.ID
JOIN Packages p2 ON Friends.Friend_ID = p2.ID
WHERE p2.Salary > p1.Salary
ORDER BY p2.Salary;