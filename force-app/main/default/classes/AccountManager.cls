public with sharing class AccountManager {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [select Id, Name, Website, Rating, Phone from Account LIMIT 10];
    }
    
}
