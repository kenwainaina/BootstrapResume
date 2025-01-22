"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronUp } from "lucide-react"

type Player = "X" | "O" | null

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState<boolean>(true)
  const [winner, setWinner] = useState<Player | "draw" | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isXNext && !winner) {
      const timer = setTimeout(() => {
        makeAIMove()
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isXNext, winner])

  const handleClick = (index: number) => {
    if (board[index] || winner) return

    const newBoard = board.slice()
    newBoard[index] = "X"
    setBoard(newBoard)
    setIsXNext(false)

    const gameWinner = calculateWinner(newBoard)
    if (gameWinner) {
      setWinner(gameWinner)
    } else if (newBoard.every((square) => square !== null)) {
      setWinner("draw")
    }
  }

  const makeAIMove = () => {
    const availableSquares = board.reduce((acc, square, index) => {
      if (!square) acc.push(index)
      return acc
    }, [] as number[])

    if (availableSquares.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableSquares.length)
      const aiMove = availableSquares[randomIndex]

      const newBoard = board.slice()
      newBoard[aiMove] = "O"
      setBoard(newBoard)
      setIsXNext(true)

      const gameWinner = calculateWinner(newBoard)
      if (gameWinner) {
        setWinner(gameWinner)
      } else if (newBoard.every((square) => square !== null)) {
        setWinner("draw")
      }
    }
  }

  const calculateWinner = (squares: Player[]): Player | null => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
  }

  const renderSquare = (index: number) => (
    <Button key={index} variant="outline" className="w-16 h-16 text-2xl font-bold" onClick={() => handleClick(index)}>
      {board[index]}
    </Button>
  )

  return (
    <Card className="w-full bg-white/5 border-white/20">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-white/10 transition-colors">
            <CardTitle className="text-xl font-bold text-center text-white flex items-center justify-between">
              Tic-Tac-Toe AI
              {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => renderSquare(index))}
            </div>
            <div className="text-center mb-4">
              {winner ? (
                <p className="text-lg font-bold text-white">
                  {winner === "draw" ? "It's a draw!" : `Winner: ${winner}`}
                </p>
              ) : (
                <p className="text-lg font-bold text-white">{isXNext ? "Your turn (X)" : "AI's turn (O)"}</p>
              )}
            </div>
            <Button onClick={resetGame} className="w-full">
              Reset Game
            </Button>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

export default TicTacToe

