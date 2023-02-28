# Ticket Breakdown

*As it is my first experience working with Ticket Breakdown, I will describe my solution options for the task and, according to it, make a breakdown.*  

For each facility, we create a new table with a name like "facilitieID" where ID is id of facilities from the table "Facilities". In this table create columns:  
- id (own custom id for each agent the facility works with);  
- agentId (internal agent database id, from table Agents);  
- someOtherColumn (additional information about the agent, for example, performance assessment);  
Due to such a database structure, we have a fast and light numeric search of agents facilities work with.  
  

## **Ticket Breakdown:**

**1. Find a solution.**  
Discussion with everyone involved in the project, search for optimal solutions, distribution of tasks, and estimation of time costs.  
**2. Database works.**  
- Collecting the data from Facilities, Agents, and Shifts tables;  
- According to collected data, generate new tables "facilitieID" and fill these tables with new data;  
- Making scripts, and triggers for guaranteeing the work of new structure of the database (should work such processes as auto creating new table "facilitieID" for each new Facilitie).  
**3. Developers round.**  
 - Synchronize backend with the new database.  
- Synchronize frontend with the new backend.  
- Making new features in frontend.  
- Tests.  
**4. To production.**  
Deploy, tests, celebrate.
