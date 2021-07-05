import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Test2 {
    public static void main(String[] args) {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring-di.xml");
        //String names[] = applicationContext.getBeanDefinitionNames();
        //Student student = (Student) applicationContext.getBean("student2");
        Classes classes = (Classes) applicationContext.getBean("classes");
//        for(String name: names) {
//            System.out.println(name);
//        }
//        System.out.println(student);
        System.out.println(classes);
    }

}
