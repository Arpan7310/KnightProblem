function findPossibleMoves(mat, p, q)
{

    let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
    let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

    let count = 0;

    
    for (let i = 0; i < 8; i++) {
        let x = p + X[i];
        let y = q + Y[i];
       if (x >= 0 && y >= 0 && x < n && y < m && mat[x][y] == 0)
            count++;
    }

  
    return count;
}
