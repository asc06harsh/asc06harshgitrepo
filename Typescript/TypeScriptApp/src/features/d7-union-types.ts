

// 7. Union Types

function printId(id: string | number) {
    console.log(id);
}

printId("101"); 
printId(101); 


interface Circle {
    
    kind: "circle";
    
    radius: number;
    
}
interface Square {
    kind: "square";
    sideLength: number;
}

// usage
function getArea(shape: Circle | Square): number {
    switch (shape.kind) {
        case "circle":
            
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
