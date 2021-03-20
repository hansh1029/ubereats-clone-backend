import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}
//if child type is different from parent type, you need to describe what child type should be. here inputtype
// export class CreateRestaurantDto extends OmitType(Restaurant, ['id'], InputType) {} 
