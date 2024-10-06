import { Note } from "./note.model";
import { CreateNoteDto } from "./Dto/create.note.dto";
export declare class NoteService {
    private noteModel;
    constructor(noteModel: typeof Note);
    createNote(createNoteDto: CreateNoteDto): Promise<Note>;
    updateNote(id: number, updateNoteDto: CreateNoteDto): Promise<Note>;
    deleteNote(id: number): Promise<void>;
}
