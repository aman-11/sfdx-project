public with sharing class getContactList {
    public static void allNAmeList(){
        List <Contact> names = new List<Contact>([select lastName from Contact]);
        System.debug(names);
    }
}
