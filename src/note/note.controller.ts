import { Body, Controller, Delete, Param, Post, Put } from "@nestjs/common";
import { NoteService } from "./note.service";
import { CreateNoteDto } from "./Dto/create.note.dto";

@Controller("note")
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async createNote(@Body() createNoteDto: CreateNoteDto) {
    return this.noteService.createNote(createNoteDto);
  }

  @Put(":id")
  async updateNote(
    @Param("id") id: number,
    @Body() updateNoteDto: CreateNoteDto
  ) {
    return this.noteService.updateNote(id, updateNoteDto);
  }

  @Delete(":id")
  async deleteNote(@Param("id") id: number) {
    return this.noteService.deleteNote(id);
  }
}
