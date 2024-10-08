package u;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import c.HybridVehicle;

public class HybridVehicleTest {
    private HybridVehicle hybrid;

    @Before
    public void setUp() {
        hybrid = new HybridVehicle();
    }

    @Test
    public void testComputeFuelCost() {
        assertEquals(21.0, hybrid.computeFuelCost(120, 20, 3.50), 0.001);
    }

    @Test
    public void testComputeElectricCost() {
        assertEquals(6.72, hybrid.computeElectricCost(120, 144.43, 0.24), 0.001);
    }

    @Test
    public void testComputeAverageMPG() {
        assertEquals(82.215, hybrid.computeAverageMPG(20, 144.43), 0.001);
    }
}
