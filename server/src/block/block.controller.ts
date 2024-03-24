import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFiles,
  UseInterceptors,
  Res,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { BlockService } from './block.service';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Response } from 'express';

@Controller('block')
export class BlockController {
  constructor(private readonly blockService: BlockService) {}

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  uploadFile(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Res() res: Response,
  ) {
    console.log(files);
    res.status(HttpStatus.CREATED).send();
    // return this.blockService.uploadFile(files);
  }

  @Get()
  findAll() {
    return this.blockService.findAll();
  }

  @Get(':fileName')
  findOne(@Param('fileName') fileName: string) {
    return this.blockService.getPresignedUrl(fileName);
  }

  @Patch(':id')
  update() {
    return 'This action updates a #${id} block';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blockService.remove(+id);
  }
}
