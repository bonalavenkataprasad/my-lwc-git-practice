public with sharing class TodaysCases {

    @AuraEnabled(cacheable=true)
    public static List<Case> getCases() {

        // CRUD check
        if (!Schema.sObjectType.Case.isAccessible()) {
            return new List<Case>();
        }

        List<Case> casesList = [
            SELECT Id, CaseNumber, Subject, Status, CreatedDate,
                   Priority, Origin, Type
            FROM Case
            WHERE CreatedDate = TODAY
        ];

        return casesList;
    }
}
