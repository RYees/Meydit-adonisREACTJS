import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column,HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Quote from './Quote'

export default class Maker extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public quoteId: number

  @column()
  public firstname: string

  @column()
  public lastname: string

  @column()
  public phonenumber: string

  @column()
  public postcode: number

  @column()
  public state: string

  @column()
  public photo: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string
  
  @column()
  public amount: number

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @beforeSave()
  public static async hashPassword (maker: Maker) {
    if (maker.$dirty.password) {
      maker.password = await Hash.make(maker.password)
    }
  }

  @hasMany(() => Quote)
  public quotes: HasMany<typeof Quote>

  

}
