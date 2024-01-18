import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { UpdateBookmarkDto } from './dto/update-bookmark.dto';
import { SetUserIdInterceptor } from 'src/shared/interceptors/set-user-id.interceptor';
import { AuthGuard } from '@nestjs/passport';

@Controller('bookmark')
export class BookmarkController {
  constructor(private readonly bookmarkService: BookmarkService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @UseInterceptors(SetUserIdInterceptor)
  create(@Body() createBookmarkDto: CreateBookmarkDto) {
    return this.bookmarkService.create(createBookmarkDto);
  }

  @Get()
  findAll() {
    return this.bookmarkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookmarkService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookmarkDto: UpdateBookmarkDto,
  ) {
    return this.bookmarkService.update(id, updateBookmarkDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookmarkService.remove(id);
  }
}
