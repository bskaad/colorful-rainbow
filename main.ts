player.onChat("Rainbow", function () {
    horizon = player.position()
    shapes.circle(
    RED_CONCRETE,
    horizon,
    Radius,
    Axis.X,
    ShapeOperation.Replace
    )
    shapes.circle(
    ORANGE_CONCRETE_POWDER,
    horizon,
    Radius - 1,
    Axis.X,
    ShapeOperation.Outline
    )
    shapes.circle(
    YELLOW_CONCRETE_POWDER,
    horizon,
    Radius - 2,
    Axis.X,
    ShapeOperation.Outline
    )
    shapes.circle(
    LIME_CONCRETE_POWDER,
    horizon,
    Radius - 3,
    Axis.X,
    ShapeOperation.Outline
    )
    shapes.circle(
    LIGHT_BLUE_CONCRETE_POWDER,
    horizon,
    Radius - 4,
    Axis.X,
    ShapeOperation.Outline
    )
    shapes.circle(
    BLUE_CONCRETE_POWDER,
    horizon,
    Radius - 5,
    Axis.X,
    ShapeOperation.Outline
    )
    shapes.circle(
    PURPLE_CONCRETE_POWDER,
    horizon,
    Radius - 6,
    Axis.X,
    ShapeOperation.Outline
    )
})
let horizon: Position = null
let Radius = 0
Radius = 100
