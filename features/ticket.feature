Feature: Ticket System

    Jude needs to create a ticket to get help from Guru website

Scenario: Create Initial Ticket

    Given Jude enters tikeck details "title" and "description"

    When He submits the ticket

    Then he should recieve an email and a ticket number
    
Scenario: Check ticket status
    Given Jude follows up for a ticket resolution
    Then The ticket status , either "Pending", "In progress" or "Resolved" should be displayed to him
Scenario: Close a ticket
    Given Judes's Ticket has been resolved 
    Then Jude can close the ticket if it is still open
Scenario: Escalate ticket
    Given Jude's ticket needs resolution from another department
    Then The agent should transfer the ticket to another department