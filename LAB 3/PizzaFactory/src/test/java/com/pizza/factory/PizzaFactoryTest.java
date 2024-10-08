import org.junit.Test;
import static org.junit.Assert.*;

public class PizzaFactoryTest {
    @Test
    public void testCreateCheesePizza() {
        PizzaFactory factory = new PizzaFactory();
        Pizza pizza = factory.createPizza("cheese");
        assertNotNull(pizza);
        assertTrue(pizza instanceof CheesePizza);
    }

    @Test
    public void testCreateGreekPizza() {
        PizzaFactory factory = new PizzaFactory();
        Pizza pizza = factory.createPizza("greek");
        assertNotNull(pizza);
        assertTrue(pizza instanceof GreekPizza);
    }

    @Test
    public void testCreatePepperoniPizza() {
        PizzaFactory factory = new PizzaFactory();
        Pizza pizza = factory.createPizza("pepperoni");
        assertNotNull(pizza);
        assertTrue(pizza instanceof PepperoniPizza);
    }

    @Test
    public void testCreateGlutenFreePizza() {
        PizzaFactory factory = new PizzaFactory();
        Pizza pizza = factory.createPizza("glutenfree");
        assertNotNull(pizza);
        assertTrue(pizza instanceof GlutenFreePizza);
    }
}
