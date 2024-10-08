public class GreekPizza implements Pizza {
    @Override
    public void prepare() { System.out.println("Preparing Greek Pizza"); }
    @Override
    public void bake() { System.out.println("Baking Greek Pizza"); }
    @Override
    public void cut() { System.out.println("Cutting Greek Pizza"); }
    @Override
    public void box() { System.out.println("Boxing Greek Pizza"); }
}