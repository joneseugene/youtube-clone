import { BookCoverVariant } from "./constants";

export interface BookInterface {
    id: number;
    title: string;
    author: string;
    genre: string; 
    rating: number; 
    total_copies: number;
    available_copies: number;
    description: string;
    coverColor: string
    cover: string
    video: string;
    summary: string;
    isLoanedBook?: boolean;

}

export interface BookCoverInterface {
    className?: string;
    variant?: BookCoverVariant
    coverColor: string
    cover: string
}