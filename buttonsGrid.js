function rotateMatrix()
{
    // number of rows and columns
    var row = 3;
    var column = 3;

    //Matrix
    var matrix = [];
    var firstRow = [];
    var secondRow = [];
    var thirdRow = [];

    /* To maintain row start index and end index
    column start index and end index */
    var startRow = 0;
    var startColumn = 0;
    var endRow = row; // Intial value of row
    var endColumn = column; // Intial value of column

    //To maintain Previous and Current element
    var previous;
    var current;

    //Stroing buttons value in matrix
    $("button").each(function(index)
    {   
        var buttonText = parseInt($(this).text());
        if(index < 3)
        {
            firstRow.push(buttonText);
        }
        else if(index < 6)
        {
            secondRow.push(buttonText);
        }
        else
        {
             thirdRow.push(buttonText);
        }
    });

    if(firstRow.length > 0 && secondRow.length > 0 && thirdRow.length > 0)
    {
        matrix.push(firstRow);
        matrix.push(secondRow);
        matrix.push(thirdRow);
    }

    //Clockwise matrix rotation
    while(startRow < endRow && startColumn < endColumn)
    {
        if(startRow + 1 == endRow || startColumn + 1 == endColumn)
            break;
        
        /* Store the first element of next row,
        element will replace the current row first element */
        previous = matrix[startRow + 1][startColumn];

        // Move elements of first row
        for(var i = startColumn; i < endColumn; i++)
        {
            current = matrix[startRow][i];
            matrix[startRow][i] = previous;
            previous = current;
        }
        startRow++;

        // Move elements of last column
        for(var i = startRow; i < endRow; i++)
        {
            current = matrix[i][endColumn - 1];
            matrix[i][endColumn - 1] = previous;
            previous = current;
        }
        endColumn--;

        // Move elements of last row
        if(startRow < endRow)
        {
            for(var i = endColumn-1; i >= startColumn; i--)
            {
                current = matrix[endRow - 1][i];
                matrix[endRow - 1][i] = previous;
                previous = current;
            }
        }
        endRow--;

        //Move elements of first column
        if(startColumn < endColumn)
        {
            for(var i = endRow-1; i >= startRow; i--)
            {
                current = matrix[i][startColumn];
                matrix[i][startColumn] = previous;
                previous = current;
            }
        }
        startColumn++;
    }

    //Print first row
    $("#btn1").text(matrix[0][0]);
    $("#btn2").text(matrix[0][1]);
    $("#btn3").text(matrix[0][2]);

    //Print second row
    $("#btn4").text(matrix[1][0]);
    $("#btn5").text(matrix[1][1]);
    $("#btn6").text(matrix[1][2]);

    //Print third row
    $("#btn7").text(matrix[2][0]);
    $("#btn8").text(matrix[2][1]);
    $("#btn9").text(matrix[2][2]);
}