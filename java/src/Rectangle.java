public class Rectangle {
    public Rectangle(int length, int width) {
        this.length = length;
        this.width = width;
    }

    private int length;
    private int width;

    public int area() {
        return this.length * this.width;
    }
}

/*
继承
 */
class Square extends Rectangle {
    public Square(int lenght) {
        super(lenght, lenght)
    }
}

/*
多态
 */