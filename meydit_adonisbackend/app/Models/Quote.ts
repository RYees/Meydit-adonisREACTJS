import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Maker from './Maker'
import Post from './Post'

export default class Quote extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public makerId: number

  @column()
  public postId: number

  @column()
  public price: string

  @column()
  public comments: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Maker)
  public maker: BelongsTo<typeof Maker>

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>

}
