package c;

public class HybridVehicle implements Gasoline, Electric {
    private double costPerGallon = 3.50; // Default value
    private double costPerKWh = 0.24;    // Default value

    public void setCostPerGallon(double costPerGallon) {
        this.costPerGallon = costPerGallon;
    }

    public void setCostPerKWh(double costPerKWh) {
        this.costPerKWh = costPerKWh;
    }

    @Override
    public double computeFuelCost(double distance, double mpg, double costPerGallon) {
        double gallonsNeeded = distance / mpg;
        return gallonsNeeded * costPerGallon;
    }

    @Override
    public double computeElectricCost(double distance, double mpge, double costPerKWh) {
        double kWhPerGallonEquivalent = 33.7;
        double kWhNeeded = (distance / mpge) * kWhPerGallonEquivalent;
        return kWhNeeded * costPerKWh;
    }


    public double computeAverageMPG(double mpg, double mpge) {
        return (mpg + mpge) / 2;
    }
}
