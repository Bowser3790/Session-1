public with sharing class AccountController {
    public AccountController() {
        @uraEnabled(cacheable=true)

        //creating method to egthe list of account
        //This method will have a parameter that will hold the search word. 
        //Filter : This Parameter will hold the search word
        public static List<Account> getAccounts(String filter){
            String keyNameString = '%' + filter + '%'; 
            // hello => hi hello, hello chris, hi chris (% means that we are looking for words that contain our words(hi,hello))
            List<Account> accountList = [SELECT Id, Name, Phone From Account WHERE Name LIKE :keyNameString];
            return accountList;
        }
        }
    }
